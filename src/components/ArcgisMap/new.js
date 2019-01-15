import React, { Component } from 'react'
import { Map } from '@esri/react-arcgis'
import { loadModules } from '@esri/react-arcgis'

const defaultProps = {
  id: '3eeba041f4ab47998ab2ab220017617f'
}

const finlandCoordinates = [25.75, 61.92];

class MyMap extends Component {
  constructor(props) {
    super()
    this.state = {
      ready: false,
      map: null,
      view: null
    };
    this.modules = {};
    this.panStart = { x: 0, y: 0 };
    this.scrollStart = { y: 0 };
    this.handleMapLoad = this.handleMapLoad.bind(this)
  }

  componentDidMount() {
    // if (!esriLoader.isLoaded()) {
    //   esriLoader.loadScript(options);
    // }

    loadModules([
      'esri/Map',
      'esri/views/MapView',
      'esri/layers/FeatureLayer',
      'esri/layers/GraphicsLayer',
      'esri/symbols/PictureMarkerSymbol',
      'esri/Graphic',
      'esri/geometry/Point',
      'esri/geometry/Extent',
      'esri/PopupTemplate',
      'dojo/domReady!',
    ])
      .then(
        ([
          Map,
          MapView,
          FeatureLayer,
          GraphicsLayer,
          PictureMarkerSymbol,
          Graphic,
          Point,
          Extent,
          PopupTemplate,
        ]) => {
          this.modules = {
            PopupTemplate,
            PictureMarkerSymbol,
            Point,
            Graphic,
            FeatureLayer,
            GraphicsLayer,
            Extent,
          };

          const map = new Map({ basemap: 'gray' });

          const view = new MapView({
            container: this.props.id,
            map,
            zoom: 5.25, // Initial zoom, later set with view.extent
            center: finlandCoordinates, // Initial coordinates, later set with view.extent
          });

          // This is needed to prevent MapView's built-in touch gestures.
          // We are doing our own panning and scrolling below.
          view.on('drag', event => {
            if (event.pointerType === 'touch') {
              event.stopPropagation();
              console.log('touch')
            }
          });

          // This disables mouse wheel zooming, but doesn't prevent
          // page scrolling when cursor is on the map
          const onWheel = event => {
            event.stopImmediatePropagation();
          };

          const onTouchStart = ev => {
            // Handle one-finger touch
            if (ev.touches.length === 1) {
              // Note down the Y coordinate of the touch point
              this.scrollStart.y = ev.touches[0].pageY;

              return;
            }

            // Handle multi-finger touch
            // Prevent browser default actions for multi-finger gestures
            ev.preventDefault();

            let x = 0;
            let y = 0;

            // eslint-disable-next-line
            for (const touch of Array.from(ev.touches)) {
              x += touch.screenX;
              y += touch.screenY;
            }

            // Note down the coordinates of where the gesture started
            this.panStart.x = x / ev.touches.length;
            this.panStart.y = y / ev.touches.length;
          };

          const onTouchMove = ev => {
            // Handle one-finger touch
            if (ev.touches.length === 1) {
              // Calculate scroll amount by using the touch start point
              const movey = this.scrollStart.y - ev.touches[0].pageY;
              window.scrollBy(0, movey);
              return;
            }

            // Handle multi-finger touch
            // Prevent browser default actions for multi-finger gestures
            ev.preventDefault();

            let x = 0;
            let y = 0;

            // eslint-disable-next-line
            for (const touch of Array.from(ev.touches)) {
              x += touch.screenX;
              y += touch.screenY;
            }

            const movex = x / ev.touches.length - this.panStart.x;
            const movey = y / ev.touches.length - this.panStart.y;

            this.panStart.x = x / ev.touches.length;
            this.panStart.y = y / ev.touches.length;

            const centerPoint = this.state.view.toScreen(this.state.view.center);

            const mapPoint = this.state.view.toMap({
              x: centerPoint.x + (movex * 1) / -1,
              y: centerPoint.y + (movey * 1) / -1,
            });

            this.state.view.center = mapPoint;
          };

          this.view.surface.addEventListener('wheel', onWheel);
          this.view.surface.addEventListener('touchstart', onTouchStart);
          this.view.surface.addEventListener('touchmove', onTouchMove);

          // Reposition on IE11 only
          const isIe11 =
            !!window.MSInputMethodContext && !!window.document.documentMode;
          if (isIe11) {
            view.popup.watch('visible', () => {
              window.setTimeout(() => {
                view.popup.reposition();
                console.log('reposition');
              }, 250);
            });
          }

          this.theMap = map;
          this.view = this.state.view;
          this.onWheel = onWheel;
          this.onTouchStart = onTouchStart;
          this.onTouchMove = onTouchMove;

          this.setState({ ready: true });
        },
      )
      .catch(err => {
        console.error(err); // eslint-disable-line
      });
  }

  shouldComponentUpdate(nextProps) {
    return (
      // update if we don't yet have a rendered housingcompanylayer
      !this.mapItemsLayer ||
      // or if the number of housing companies differ between renders
      nextProps.mapItems.length !== this.props.mapItems.length ||
      // or if the amount is same, then check the coords
      nextProps.mapItems.reduce(
        (hash, hc) => `${hash}${hc.lat}${hc.lng}`,
        '',
      ) !==
      this.props.mapItems.reduce(
        (hash, hc) => `${hash}${hc.lat}${hc.lng}`,
        '',
      )
    );
  }

  componentWillUnmount() {
    this.modules = null;
    this.mapItemsLayer = null;
    this.bufferLayer = null;

    if (this.onMouseout) {
      this.onMouseout.remove();
      this.onMouseout = null;
    }

    if (this.state.view && this.onWheel) {
      this.view.surface.removeEventListener('wheel', this.onWheel);
    }

    if (this.state.view && this.onTouchStart) {
      this.view.surface.removeEventListener('touchstart', this.onTouchStart);
    }

    if (this.state.view && this.onTouchMove) {
      this.state.view.surface.removeEventListener('touchmove', this.onTouchMove);
    }

    if (this.state.view) {
      this.state.view.container = null;
      this.state.view.destroy();
      this.state.view = null;
    }

    if (this.theMap) {
      this.theMap.container = null;
      this.theMap.removeAll();
      this.theMap.destroy();
      this.theMap = null;
    }
  }

  createPopUpTemplate() {
    const { PopupTemplate } = this.modules;

    const template = new PopupTemplate({
      title: '{name}',
      alignment: 'bottom-right',
      content: `
        <div class="map-teaser">
          <img src="{imageUrl}" width="253px" alt="{name}" />
          <span class="tagline">{tag}</span>
          <p class="title">{name}</p>
          <a href="{slug}" class="gtm-link gtm-link-map">Tutustu kohteeseen</a>
        </div>`,
      fieldInfos: [
        {
          // define field infos so we can specify an alias
          fieldName: 'name',
          label: 'Nimi',
        },
        {
          // define field infos so we can specify an alias
          fieldName: 'link',
          label: 'Linkki',
        },
        {
          // define field infos so we can specify an alias
          fieldName: 'tag',
          label: 'Tagline',
        },
        {
          // define field infos so we can specify an alias
          fieldName: 'image',
          label: 'imageUrl',
        },
        {
          // define field infos so we can specify an alias
          fieldName: 'ObjectID',
          label: 'ObjectID',
        },
      ],
    });
    return template;
  }

  createFeatureCollection(rawJson) {
    const { Point, Graphic } = this.modules;
    const features = [];

    rawJson.forEach((item, index) => {
      const point = new Point({
        x: item.lng,
        y: item.lat,
        spatialReference: { wkid: 4326 },
      });
      const attributes = {
        ObjectID: index,
        name: item.name,
        link: item.link,
        slug: item.slug,
        imageUrl: item.image,
        tag: item.tag,
      };
      const graphic = new Graphic();
      graphic.geometry = point;
      graphic.attributes = attributes;

      features.push(graphic);
    });

    // Create featureCollection
    const featureCollection = {
      source: features,
      renderer: {
        type: 'simple',
        symbol: {
          type: 'picture-marker',
          width: 100,
          height: 100,
          url: 'https://files.srv.fi/map/srvhouseicon.png',
        },
      },
      geometryType: 'point',
      outFields: ['ObjectID', 'name', 'link', 'slug', 'imageUrl', 'tag'],
      fields: [
        {
          name: 'ObjectID',
          alias: 'ObjectID',
          type: 'oid',
        },
        {
          name: 'name',
          alias: 'name',
          type: 'string',
        },
        {
          name: 'link',
          alias: 'link',
          type: 'string',
        },
        {
          name: 'slug',
          alias: 'slug',
          type: 'string',
        },
        {
          name: 'imageUrl',
          alias: 'imageUrl',
          type: 'string',
        },
        {
          name: 'tag',
          alias: 'tag',
          type: 'string',
        },
      ],
      objectIdField: 'ObjectID',
    };

    return featureCollection;
  }

  createLayers(data) {
    const { FeatureLayer, GraphicsLayer } = this.modules;
    const bufferLayer = new GraphicsLayer();
    const featureCollection = this.createFeatureCollection(data);
    const mapItemsLayer = new FeatureLayer(featureCollection);

    this.onMouseout = mapItemsLayer.on('mouse-out', () => {
      bufferLayer.clear();
    });

    mapItemsLayer.popupTemplate = this.createPopUpTemplate();

    return {
      mapItemsLayer,
      bufferLayer,
    };
  }

  centerAndZoomMap(featureLayer) {
    const { Extent } = this.modules;

    if (typeof featureLayer.source.items[0] !== 'undefined') {
      let minx = featureLayer.source.items[0].geometry.x;
      let maxx = featureLayer.source.items[0].geometry.x;
      let miny = featureLayer.source.items[0].geometry.y;
      let maxy = featureLayer.source.items[0].geometry.y;

      featureLayer.source.items.forEach(graphic => {
        if (graphic.geometry.x > maxx) {
          maxx = graphic.geometry.x;
        }
        if (graphic.geometry.x < minx) {
          minx = graphic.geometry.x;
        }
        if (graphic.geometry.y > maxy) {
          maxy = graphic.geometry.y;
        }
        if (graphic.geometry.y < miny) {
          miny = graphic.geometry.y;
        }
      });

      // Cut some slack so that most northern pin won't get on edge of the map
      const slackAmount = 5;

      const featureLayerExtent = new Extent({
        xmin: parseFloat(minx - slackAmount, 10),
        ymin: parseFloat(miny - slackAmount, 10),
        xmax: parseFloat(maxx + slackAmount, 10),
        ymax: parseFloat(maxy + slackAmount, 10),
        spatialReference: {
          wkid: 4326,
        },
      });

      this.view.extent = featureLayerExtent;
    }
  }

  renderMarkers(data) {
    // Create new layers
    const { mapItemsLayer, bufferLayer } = this.createLayers(data);

    // Remove current layers if they exist
    if (this.mapItemsLayer) {
      this.theMap.remove(this.mapItemsLayer);
      this.onMouseout.remove();
      this.onMouseout = null;
    }

    if (this.bufferLayer) {
      this.theMap.remove(this.bufferLayer);
    }

    // Add new layers
    this.theMap.add(bufferLayer);
    this.theMap.add(mapItemsLayer);
    this.centerAndZoomMap(mapItemsLayer);

    // Set new layers as current layers
    this.mapItemsLayer = mapItemsLayer;
    this.bufferLayer = bufferLayer;
  }

  handleMapLoad(map, view) {
    this.setState({ map, view });
}

  render() {
    const { id } = this.props

    if (this.state.ready) {
      this.renderMarkers(this.props.mapItems);
    }

    return (
      <Map
        id={id}
        mapProperties={{ basemap: 'gray' }}
        style={{ width: '100vw', height: '100vh' }}
        viewProperties={{
          center: [25.75, 61.92],
          zoom: 5.25
        }}
      />
    )
  }
}

MyMap.defaultProps = defaultProps
export default MyMap
