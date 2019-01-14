import React, { Component } from 'react';
import { arrayOf, number, shape, string } from 'prop-types';
import esriLoader, { loadModules } from 'esri-loader';
import styled, { injectGlobal } from 'styled-components';

const esriApiVersion = '4.10';

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  @import 'https://js.arcgis.com/${esriApiVersion}/esri/css/main.css';
`;

const propTypes = {
  mapItems: arrayOf(
    shape({
      lat: number.isRequired,
      lng: number.isRequired,
      name: string.isRequired,
      slug: string.isRequired,
      link: string,
      image: string,
      tag: string,
    }),
  ),
  id: string,
};

const defaultProps = {
  mapItems: [],
  id: '3eeba041f4ab47998ab2ab220017617f', // backup: '3df11378d3e94993ae5040ff20dfe16b'
};

const options = {
  url: `https://js.arcgis.com/${esriApiVersion}`,
};

const finlandCoordinates = [25.75, 61.92];

const MapStyles = styled.div`
  .esri-view {
    position: relative;
    height: 490px;
    max-height: 490px;
    overflow: hidden;
    padding: 0;

    .esri-view-surface--inset-outline:focus:after {
      display: none;
      content: none;
    }

    .esri-popup__main-container {
      max-height: 100%;
      width: 325px;
      left: 50%;
      transform: translateX(-50%);
    }

    .esri-popup__content {
      margin: 0px;
    }

    .esri-popup__header {
      position: absolute;
      z-index: 5;
      min-height: 40px;
      right: 0;
      top: 0;
      width: 100%;
    }

    .esri-icon-close {
      border-radius: 50%;
      background: #FFF;
      text-align: center;
      height: 26px;
      width: 26px;
      flex: 0 0 26px;

      &:before {
        color: #000;
        vertical-align: -29%;
      }
    }

    .esri-attribution,
    .esri-popup__feature-menu,
    .esri-popup__feature-buttons,
    .esri-popup__footer {
      display: none;
    }

    .esri-popup__button {
      &.esri-popup__button--dock {
        display: none;
      }
    }

    .esri-popup__header-container {
      &.esri-popup__header-container--button {
        display: none;
      }
    }
  }

  .map-teaser {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 8% 1em 2%;
    color: ${props => props.theme.bgColor};
    min-height: 200px;
    max-height: 200px;

    img {
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      min-height: 200px;
      max-height: 200px;
      height: 100%;
      z-index: -1;
    }

    .tagline {
      ${props => props.theme.getStyle('tag')};
      color: ${props => props.theme.primaryColor};
      background: ${props => props.theme.bgColor};
      font-size: 0.85em;
    }

    .title {
      ${props => props.theme.getStyle('headings.base')};
      ${props => props.theme.getStyle('headings.h4')};
      margin: 0 auto 1.5rem;
      padding-top: 0.5rem;
    }

    a {
      ${props => props.theme.getStyle('buttons.base')};
      ${props => props.theme.getStyle('buttons.primary')};
      align-self: center;
      text-decoration: none;
    }
  }
`;

class ArcgisMap extends Component {
  constructor() {
    super();
    this.state = {
      ready: false,
    };
    this.modules = {};
    this.panStart = { x: 0, y: 0 };
    this.scrollStart = { y: 0 };
  }

  componentDidMount() {
    if (!esriLoader.isLoaded()) {
      esriLoader.loadScript(options);
    }

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

            const centerPoint = this.view.toScreen(this.view.center);

            const mapPoint = this.view.toMap({
              x: centerPoint.x + (movex * 1) / -1,
              y: centerPoint.y + (movey * 1) / -1,
            });

            this.view.center = mapPoint;
          };

          view.surface.addEventListener('wheel', onWheel);
          view.surface.addEventListener('touchstart', onTouchStart);
          view.surface.addEventListener('touchmove', onTouchMove);

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
          this.view = view;
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

    if (this.view && this.onWheel) {
      this.view.surface.removeEventListener('wheel', this.onWheel);
    }

    if (this.view && this.onTouchStart) {
      this.view.surface.removeEventListener('touchstart', this.onTouchStart);
    }

    if (this.view && this.onTouchMove) {
      this.view.surface.removeEventListener('touchmove', this.onTouchMove);
    }

    if (this.view) {
      this.view.container = null;
      this.view.destroy();
      this.view = null;
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

  render() {
    if (this.state.ready) {
      this.renderMarkers(this.props.mapItems);
    }

    return (
      <MapStyles>
        <div id={this.props.id} />
      </MapStyles>
    );
  }
}

ArcgisMap.propTypes = propTypes;
ArcgisMap.defaultProps = defaultProps;

export default ArcgisMap;
