var wms_layers = [];


        var lyr_PNOA_0 = new ol.layer.Tile({
            'title': 'PNOA',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tms-pnoa-ma.idee.es/1.0.0/pnoa-ma/{z}/{x}/{-y}.jpeg'
            })
        });
var format_SSEproyectos_1 = new ol.format.GeoJSON();
var features_SSEproyectos_1 = format_SSEproyectos_1.readFeatures(json_SSEproyectos_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SSEproyectos_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SSEproyectos_1.addFeatures(features_SSEproyectos_1);
var lyr_SSEproyectos_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SSEproyectos_1, 
                style: style_SSEproyectos_1,
                popuplayertitle: "SSE proyectos",
                interactive: true,
    title: 'SSE proyectos<br />\
    <img src="styles/legend/SSEproyectos_1_0.png" /> Ejea<br />\
    <img src="styles/legend/SSEproyectos_1_1.png" /> Sádaba<br />\
    <img src="styles/legend/SSEproyectos_1_2.png" /> <br />'
        });
var format_ForesEOL522linea_2 = new ol.format.GeoJSON();
var features_ForesEOL522linea_2 = format_ForesEOL522linea_2.readFeatures(json_ForesEOL522linea_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ForesEOL522linea_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ForesEOL522linea_2.addFeatures(features_ForesEOL522linea_2);
var lyr_ForesEOL522linea_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ForesEOL522linea_2, 
                style: style_ForesEOL522linea_2,
                popuplayertitle: "Fores EOL-522 linea",
                interactive: true,
                title: '<img src="styles/legend/ForesEOL522linea_2.png" /> Fores EOL-522 linea'
            });
var format_ForesFot677linea_3 = new ol.format.GeoJSON();
var features_ForesFot677linea_3 = format_ForesFot677linea_3.readFeatures(json_ForesFot677linea_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ForesFot677linea_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ForesFot677linea_3.addFeatures(features_ForesFot677linea_3);
var lyr_ForesFot677linea_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ForesFot677linea_3, 
                style: style_ForesFot677linea_3,
                popuplayertitle: "Fores Fot-677 linea",
                interactive: true,
                title: '<img src="styles/legend/ForesFot677linea_3.png" /> Fores Fot-677 linea'
            });
var format_Exp_PFot733AC_4 = new ol.format.GeoJSON();
var features_Exp_PFot733AC_4 = format_Exp_PFot733AC_4.readFeatures(json_Exp_PFot733AC_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Exp_PFot733AC_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Exp_PFot733AC_4.addFeatures(features_Exp_PFot733AC_4);
var lyr_Exp_PFot733AC_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Exp_PFot733AC_4, 
                style: style_Exp_PFot733AC_4,
                popuplayertitle: "Exp_PFot-733 AC ",
                interactive: true,
                title: '<img src="styles/legend/Exp_PFot733AC_4.png" /> Exp_PFot-733 AC '
            });
var format_Exp_PFot677AC_5 = new ol.format.GeoJSON();
var features_Exp_PFot677AC_5 = format_Exp_PFot677AC_5.readFeatures(json_Exp_PFot677AC_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Exp_PFot677AC_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Exp_PFot677AC_5.addFeatures(features_Exp_PFot677AC_5);
var lyr_Exp_PFot677AC_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Exp_PFot677AC_5, 
                style: style_Exp_PFot677AC_5,
                popuplayertitle: "Exp_PFot-677 AC ",
                interactive: true,
                title: '<img src="styles/legend/Exp_PFot677AC_5.png" /> Exp_PFot-677 AC '
            });
var format_Exp_PEol753AC_6 = new ol.format.GeoJSON();
var features_Exp_PEol753AC_6 = format_Exp_PEol753AC_6.readFeatures(json_Exp_PEol753AC_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Exp_PEol753AC_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Exp_PEol753AC_6.addFeatures(features_Exp_PEol753AC_6);
var lyr_Exp_PEol753AC_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Exp_PEol753AC_6, 
                style: style_Exp_PEol753AC_6,
                popuplayertitle: "Exp_PEol-753 AC",
                interactive: true,
                title: '<img src="styles/legend/Exp_PEol753AC_6.png" /> Exp_PEol-753 AC'
            });
var format_Exp_PEol614AC_7 = new ol.format.GeoJSON();
var features_Exp_PEol614AC_7 = format_Exp_PEol614AC_7.readFeatures(json_Exp_PEol614AC_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Exp_PEol614AC_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Exp_PEol614AC_7.addFeatures(features_Exp_PEol614AC_7);
var lyr_Exp_PEol614AC_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Exp_PEol614AC_7, 
                style: style_Exp_PEol614AC_7,
                popuplayertitle: "Exp_PEol-614 AC",
                interactive: true,
                title: '<img src="styles/legend/Exp_PEol614AC_7.png" /> Exp_PEol-614 AC'
            });
var format_Exp_PEol522AC_8 = new ol.format.GeoJSON();
var features_Exp_PEol522AC_8 = format_Exp_PEol522AC_8.readFeatures(json_Exp_PEol522AC_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Exp_PEol522AC_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Exp_PEol522AC_8.addFeatures(features_Exp_PEol522AC_8);
var lyr_Exp_PEol522AC_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Exp_PEol522AC_8, 
                style: style_Exp_PEol522AC_8,
                popuplayertitle: "Exp_PEol-522 AC",
                interactive: true,
                title: '<img src="styles/legend/Exp_PEol522AC_8.png" /> Exp_PEol-522 AC'
            });
var format_Exp_PEol593AC_9 = new ol.format.GeoJSON();
var features_Exp_PEol593AC_9 = format_Exp_PEol593AC_9.readFeatures(json_Exp_PEol593AC_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Exp_PEol593AC_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Exp_PEol593AC_9.addFeatures(features_Exp_PEol593AC_9);
var lyr_Exp_PEol593AC_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Exp_PEol593AC_9, 
                style: style_Exp_PEol593AC_9,
                popuplayertitle: "Exp_PEol-593 AC",
                interactive: true,
                title: '<img src="styles/legend/Exp_PEol593AC_9.png" /> Exp_PEol-593 AC'
            });
var format_10_AEROS_SADABA_R3_10 = new ol.format.GeoJSON();
var features_10_AEROS_SADABA_R3_10 = format_10_AEROS_SADABA_R3_10.readFeatures(json_10_AEROS_SADABA_R3_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_10_AEROS_SADABA_R3_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_10_AEROS_SADABA_R3_10.addFeatures(features_10_AEROS_SADABA_R3_10);cluster_10_AEROS_SADABA_R3_10 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_10_AEROS_SADABA_R3_10
});
var lyr_10_AEROS_SADABA_R3_10 = new ol.layer.Vector({
                declutter: false,
                source:cluster_10_AEROS_SADABA_R3_10, 
                style: style_10_AEROS_SADABA_R3_10,
                popuplayertitle: "10_AEROS_SADABA_R3",
                interactive: true,
                title: '<img src="styles/legend/10_AEROS_SADABA_R3_10.png" /> 10_AEROS_SADABA_R3'
            });

lyr_PNOA_0.setVisible(true);lyr_SSEproyectos_1.setVisible(true);lyr_ForesEOL522linea_2.setVisible(true);lyr_ForesFot677linea_3.setVisible(true);lyr_Exp_PFot733AC_4.setVisible(true);lyr_Exp_PFot677AC_5.setVisible(true);lyr_Exp_PEol753AC_6.setVisible(true);lyr_Exp_PEol614AC_7.setVisible(true);lyr_Exp_PEol522AC_8.setVisible(true);lyr_Exp_PEol593AC_9.setVisible(true);lyr_10_AEROS_SADABA_R3_10.setVisible(true);
var layersList = [lyr_PNOA_0,lyr_SSEproyectos_1,lyr_ForesEOL522linea_2,lyr_ForesFot677linea_3,lyr_Exp_PFot733AC_4,lyr_Exp_PFot677AC_5,lyr_Exp_PEol753AC_6,lyr_Exp_PEol614AC_7,lyr_Exp_PEol522AC_8,lyr_Exp_PEol593AC_9,lyr_10_AEROS_SADABA_R3_10];
lyr_SSEproyectos_1.set('fieldAliases', {'Exp': 'Exp', 'Parque': 'Parque', 'Promotor': 'Promotor', 'MWins': 'MWins', 'Municipios': 'Municipios', 'Provincias': 'Provincias', 'PuntoAyC': 'PuntoAyC', 'Estado': 'Estado', 'layer': 'layer', 'path': 'path', });
lyr_ForesEOL522linea_2.set('fieldAliases', {'Exp': 'Exp', 'LAAT': 'LAAT', 'LAMT': 'LAMT', 'Promotor': 'Promotor', 'Tension': 'Tension', 'Municipios': 'Municipios', 'Provincias': 'Provincias', });
lyr_ForesFot677linea_3.set('fieldAliases', {'Exp': 'Exp', 'LAAT': 'LAAT', 'LAMT': 'LAMT', 'Promotor': 'Promotor', 'Tension': 'Tension', 'Municipios': 'Municipios', 'Provincias': 'Provincias', });
lyr_Exp_PFot733AC_4.set('fieldAliases', {'fid': 'fid', 'Exp': 'Exp', 'Parque': 'Parque', 'Promotor': 'Promotor', 'Municipios': 'Municipios', 'Provincias': 'Provincias', 'PuntoAyC': 'PuntoAyC', 'MWins': 'MWins', 'Estado': 'Estado', });
lyr_Exp_PFot677AC_5.set('fieldAliases', {'fid': 'fid', 'Exp': 'Exp', 'Parque': 'Parque', 'Promotor': 'Promotor', 'Municipios': 'Municipios', 'Provincias': 'Provincias', 'PuntoAyC': 'PuntoAyC', 'MWins': 'MWins', 'Estado': 'Estado', });
lyr_Exp_PEol753AC_6.set('fieldAliases', {'fid': 'fid', 'Exp': 'Exp', 'Parque': 'Parque', 'Promotor': 'Promotor', 'MWins': 'MWins', 'Municipios': 'Municipios', 'Provincias': 'Provincias', 'PuntoAyC': 'PuntoAyC', 'Estado': 'Estado', });
lyr_Exp_PEol614AC_7.set('fieldAliases', {'fid': 'fid', 'Exp': 'Exp', 'Parque': 'Parque', 'Promotor': 'Promotor', 'MWins': 'MWins', 'Municipios': 'Municipios', 'Provincias': 'Provincias', 'PuntoAyC': 'PuntoAyC', 'Estado': 'Estado', });
lyr_Exp_PEol522AC_8.set('fieldAliases', {'fid': 'fid', 'Exp': 'Exp', 'Parque': 'Parque', 'Promotor': 'Promotor', 'MWins': 'MWins', 'Municipios': 'Municipios', 'Provincias': 'Provincias', 'PuntoAyC': 'PuntoAyC', 'Estado': 'Estado', 'layer': 'layer', 'path': 'path', });
lyr_Exp_PEol593AC_9.set('fieldAliases', {'fid': 'fid', 'Exp': 'Exp', 'Parque': 'Parque', 'Promotor': 'Promotor', 'MWins': 'MWins', 'Municipios': 'Municipios', 'Provincias': 'Provincias', 'PuntoAyC': 'PuntoAyC', 'Estado': 'Estado', 'layer': 'layer', 'path': 'path', });
lyr_10_AEROS_SADABA_R3_10.set('fieldAliases', {'MARCA': 'MARCA', 'MODELO': 'MODELO', 'POTENCIA': 'POTENCIA', 'ALTURA': 'ALTURA', 'DIAMETRO_R': 'DIAMETRO_R', });
lyr_SSEproyectos_1.set('fieldImages', {'Exp': 'TextEdit', 'Parque': 'TextEdit', 'Promotor': 'TextEdit', 'MWins': 'TextEdit', 'Municipios': 'TextEdit', 'Provincias': 'TextEdit', 'PuntoAyC': 'TextEdit', 'Estado': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_ForesEOL522linea_2.set('fieldImages', {'Exp': 'TextEdit', 'LAAT': 'TextEdit', 'LAMT': 'TextEdit', 'Promotor': 'TextEdit', 'Tension': 'TextEdit', 'Municipios': 'TextEdit', 'Provincias': 'TextEdit', });
lyr_ForesFot677linea_3.set('fieldImages', {'Exp': 'TextEdit', 'LAAT': 'TextEdit', 'LAMT': 'TextEdit', 'Promotor': 'TextEdit', 'Tension': 'TextEdit', 'Municipios': 'TextEdit', 'Provincias': 'TextEdit', });
lyr_Exp_PFot733AC_4.set('fieldImages', {'fid': 'TextEdit', 'Exp': 'TextEdit', 'Parque': 'TextEdit', 'Promotor': 'TextEdit', 'Municipios': 'TextEdit', 'Provincias': 'TextEdit', 'PuntoAyC': 'TextEdit', 'MWins': 'TextEdit', 'Estado': 'TextEdit', });
lyr_Exp_PFot677AC_5.set('fieldImages', {'fid': 'TextEdit', 'Exp': 'TextEdit', 'Parque': 'TextEdit', 'Promotor': 'TextEdit', 'Municipios': 'TextEdit', 'Provincias': 'TextEdit', 'PuntoAyC': 'TextEdit', 'MWins': 'TextEdit', 'Estado': 'TextEdit', });
lyr_Exp_PEol753AC_6.set('fieldImages', {'fid': 'TextEdit', 'Exp': 'TextEdit', 'Parque': 'TextEdit', 'Promotor': 'TextEdit', 'MWins': 'TextEdit', 'Municipios': 'TextEdit', 'Provincias': 'TextEdit', 'PuntoAyC': 'TextEdit', 'Estado': 'TextEdit', });
lyr_Exp_PEol614AC_7.set('fieldImages', {'fid': 'TextEdit', 'Exp': 'TextEdit', 'Parque': 'TextEdit', 'Promotor': 'TextEdit', 'MWins': 'TextEdit', 'Municipios': 'TextEdit', 'Provincias': 'TextEdit', 'PuntoAyC': 'TextEdit', 'Estado': 'TextEdit', });
lyr_Exp_PEol522AC_8.set('fieldImages', {'fid': 'TextEdit', 'Exp': 'TextEdit', 'Parque': 'TextEdit', 'Promotor': 'TextEdit', 'MWins': 'TextEdit', 'Municipios': 'TextEdit', 'Provincias': 'TextEdit', 'PuntoAyC': 'TextEdit', 'Estado': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Exp_PEol593AC_9.set('fieldImages', {'fid': 'TextEdit', 'Exp': 'TextEdit', 'Parque': 'TextEdit', 'Promotor': 'TextEdit', 'MWins': 'TextEdit', 'Municipios': 'TextEdit', 'Provincias': 'TextEdit', 'PuntoAyC': 'TextEdit', 'Estado': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_10_AEROS_SADABA_R3_10.set('fieldImages', {'MARCA': 'TextEdit', 'MODELO': 'TextEdit', 'POTENCIA': 'TextEdit', 'ALTURA': 'TextEdit', 'DIAMETRO_R': 'TextEdit', });
lyr_SSEproyectos_1.set('fieldLabels', {'Exp': 'no label', 'Parque': 'no label', 'Promotor': 'no label', 'MWins': 'no label', 'Municipios': 'no label', 'Provincias': 'no label', 'PuntoAyC': 'no label', 'Estado': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_ForesEOL522linea_2.set('fieldLabels', {'Exp': 'no label', 'LAAT': 'no label', 'LAMT': 'no label', 'Promotor': 'no label', 'Tension': 'no label', 'Municipios': 'no label', 'Provincias': 'no label', });
lyr_ForesFot677linea_3.set('fieldLabels', {'Exp': 'no label', 'LAAT': 'no label', 'LAMT': 'no label', 'Promotor': 'no label', 'Tension': 'no label', 'Municipios': 'no label', 'Provincias': 'no label', });
lyr_Exp_PFot733AC_4.set('fieldLabels', {'fid': 'no label', 'Exp': 'no label', 'Parque': 'no label', 'Promotor': 'no label', 'Municipios': 'no label', 'Provincias': 'no label', 'PuntoAyC': 'no label', 'MWins': 'no label', 'Estado': 'no label', });
lyr_Exp_PFot677AC_5.set('fieldLabels', {'fid': 'no label', 'Exp': 'no label', 'Parque': 'no label', 'Promotor': 'no label', 'Municipios': 'no label', 'Provincias': 'no label', 'PuntoAyC': 'no label', 'MWins': 'no label', 'Estado': 'no label', });
lyr_Exp_PEol753AC_6.set('fieldLabels', {'fid': 'no label', 'Exp': 'no label', 'Parque': 'no label', 'Promotor': 'no label', 'MWins': 'no label', 'Municipios': 'no label', 'Provincias': 'no label', 'PuntoAyC': 'no label', 'Estado': 'no label', });
lyr_Exp_PEol614AC_7.set('fieldLabels', {'fid': 'no label', 'Exp': 'no label', 'Parque': 'no label', 'Promotor': 'no label', 'MWins': 'no label', 'Municipios': 'no label', 'Provincias': 'no label', 'PuntoAyC': 'no label', 'Estado': 'no label', });
lyr_Exp_PEol522AC_8.set('fieldLabels', {'fid': 'no label', 'Exp': 'no label', 'Parque': 'no label', 'Promotor': 'no label', 'MWins': 'no label', 'Municipios': 'no label', 'Provincias': 'no label', 'PuntoAyC': 'no label', 'Estado': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Exp_PEol593AC_9.set('fieldLabels', {'fid': 'no label', 'Exp': 'no label', 'Parque': 'no label', 'Promotor': 'no label', 'MWins': 'no label', 'Municipios': 'no label', 'Provincias': 'no label', 'PuntoAyC': 'no label', 'Estado': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_10_AEROS_SADABA_R3_10.set('fieldLabels', {'MARCA': 'no label', 'MODELO': 'no label', 'POTENCIA': 'no label', 'ALTURA': 'no label', 'DIAMETRO_R': 'no label', });
lyr_10_AEROS_SADABA_R3_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});