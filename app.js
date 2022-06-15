const xml2js = require('xml2js');
const fs = require('fs');

// Leer XML desde un archivo
const xml = fs.readFileSync('./cp_xml/CPdescarga.xml');

(async () => {
    try {
        const result = await xml2js.parseStringPromise(xml, {mergeAttrs: true});

        // Convertirlo a una cadena JSON
        const json = JSON.stringify(result, null, 4);

        // Guardar archivo JSON
        fs.writeFileSync('./cp_json/codigosPostales.json', json);

    } catch (error) {
        console.log(error);
    }
})();