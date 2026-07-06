var wms_layers = [];


        var lyr_positron_0 = new ol.layer.Tile({
            'title': 'positron',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatelliteHybrid_1 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_81001URBANO_2 = new ol.format.GeoJSON();
var features_81001URBANO_2 = format_81001URBANO_2.readFeatures(json_81001URBANO_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_81001URBANO_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_81001URBANO_2.addFeatures(features_81001URBANO_2);
var lyr_81001URBANO_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_81001URBANO_2, 
                style: style_81001URBANO_2,
                popuplayertitle: '81001-URBANO',
                interactive: true,
                title: '<img src="styles/legend/81001URBANO_2.png" /> 81001-URBANO'
            });
var format_44430URBANO_3 = new ol.format.GeoJSON();
var features_44430URBANO_3 = format_44430URBANO_3.readFeatures(json_44430URBANO_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_44430URBANO_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_44430URBANO_3.addFeatures(features_44430URBANO_3);
var lyr_44430URBANO_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_44430URBANO_3, 
                style: style_44430URBANO_3,
                popuplayertitle: '44430-URBANO',
                interactive: true,
                title: '<img src="styles/legend/44430URBANO_3.png" /> 44430-URBANO'
            });
var format_UbicacionesdeProyecto_4 = new ol.format.GeoJSON();
var features_UbicacionesdeProyecto_4 = format_UbicacionesdeProyecto_4.readFeatures(json_UbicacionesdeProyecto_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UbicacionesdeProyecto_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UbicacionesdeProyecto_4.addFeatures(features_UbicacionesdeProyecto_4);
var lyr_UbicacionesdeProyecto_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UbicacionesdeProyecto_4, 
                style: style_UbicacionesdeProyecto_4,
                popuplayertitle: 'Ubicaciones de Proyecto',
                interactive: true,
                title: '<img src="styles/legend/UbicacionesdeProyecto_4.png" /> Ubicaciones de Proyecto'
            });

lyr_positron_0.setVisible(true);lyr_GoogleSatelliteHybrid_1.setVisible(true);lyr_81001URBANO_2.setVisible(true);lyr_44430URBANO_3.setVisible(true);lyr_UbicacionesdeProyecto_4.setVisible(true);
var layersList = [lyr_positron_0,lyr_GoogleSatelliteHybrid_1,lyr_81001URBANO_2,lyr_44430URBANO_3,lyr_UbicacionesdeProyecto_4];
lyr_81001URBANO_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CODIGO': 'CODIGO', 'MANZANA_CO': 'MANZANA_CO', 'NUMERO_SUB': 'NUMERO_SUB', 'CODIGO_ANT': 'CODIGO_ANT', 'NOMBRE_ENT': 'NOMBRE_ENT', 'SIGLA': 'SIGLA', 'ESCALA': 'ESCALA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'MUN': 'MUN', 'DPTO': 'DPTO', 'AREA_M2': 'AREA_M2', });
lyr_44430URBANO_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CODIGO': 'CODIGO', 'MANZANA_CO': 'MANZANA_CO', 'NUMERO_SUB': 'NUMERO_SUB', 'CODIGO_ANT': 'CODIGO_ANT', 'NOMBRE_ENT': 'NOMBRE_ENT', 'SIGLA': 'SIGLA', 'ESCALA': 'ESCALA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'MUN': 'MUN', 'DPTO': 'DPTO', 'AREA_M2': 'AREA_M2', });
lyr_UbicacionesdeProyecto_4.set('fieldAliases', {'address': 'address', });
lyr_81001URBANO_2.set('fieldImages', {'OBJECTID': '', 'CODIGO': '', 'MANZANA_CO': '', 'NUMERO_SUB': '', 'CODIGO_ANT': '', 'NOMBRE_ENT': '', 'SIGLA': '', 'ESCALA': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', 'MUN': '', 'DPTO': '', 'AREA_M2': '', });
lyr_44430URBANO_3.set('fieldImages', {'OBJECTID': '', 'CODIGO': '', 'MANZANA_CO': '', 'NUMERO_SUB': '', 'CODIGO_ANT': '', 'NOMBRE_ENT': '', 'SIGLA': '', 'ESCALA': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', 'MUN': '', 'DPTO': '', 'AREA_M2': '', });
lyr_UbicacionesdeProyecto_4.set('fieldImages', {'address': '', });
lyr_81001URBANO_2.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'CODIGO': 'inline label - always visible', 'MANZANA_CO': 'inline label - always visible', 'NUMERO_SUB': 'inline label - always visible', 'CODIGO_ANT': 'inline label - always visible', 'NOMBRE_ENT': 'inline label - always visible', 'SIGLA': 'inline label - visible with data', 'ESCALA': 'inline label - always visible', 'SHAPE_Leng': 'inline label - always visible', 'SHAPE_Area': 'inline label - always visible', 'MUN': 'inline label - always visible', 'DPTO': 'inline label - always visible', 'AREA_M2': 'inline label - always visible', });
lyr_44430URBANO_3.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'CODIGO': 'inline label - always visible', 'MANZANA_CO': 'inline label - always visible', 'NUMERO_SUB': 'inline label - always visible', 'CODIGO_ANT': 'inline label - always visible', 'NOMBRE_ENT': 'inline label - always visible', 'SIGLA': 'inline label - always visible', 'ESCALA': 'inline label - always visible', 'SHAPE_Leng': 'inline label - always visible', 'SHAPE_Area': 'inline label - always visible', 'MUN': 'inline label - always visible', 'DPTO': 'inline label - always visible', 'AREA_M2': 'inline label - always visible', });
lyr_UbicacionesdeProyecto_4.set('fieldLabels', {'address': 'inline label - always visible', });
lyr_UbicacionesdeProyecto_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});