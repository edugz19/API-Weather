function provincias(){
    fetch('https://www.el-tiempo.net/api/json/v2/provincias',
        {
        method: 'GET',
        })
        .then(response => response.json())
        .then(json => { 
            var prov = [];
            prov = JSON.parse(JSON.stringify(json));
            var lista = document.getElementById("prov");
            lista.innerHTML = '<option>Provincia</option>';
            
            for (let item of prov.provincias){
                
                lista.innerHTML += `<option value="${item.CODPROV}" onclick="municipio(this.value)">${item.NOMBRE_PROVINCIA}</option>`;
            }

        console.log(json)
        }) 
}

function municipio(id){
    fetch('https://www.el-tiempo.net/api/json/v2/provincias/'+id+'/municipios',
        {
        method: 'GET',
        })
        .then(response => response.json())
        .then(json => { 
            var munic = [];
            munic = JSON.parse(JSON.stringify(json));
            var lista = document.getElementById("mun");
            lista.innerHTML = '';
            
            for (let item of munic.municipios){
                
                lista.innerHTML += `<option value="${item.CODIGOINE}" onclick="tiempo(this.value)">${item.NOMBRE}</option>`;
            }
        console.log(json)
        }) 
}

function tiempo(id){
    fetch('https://www.el-tiempo.net/api/json/v2/provincias/'+id.substring(0,2)+'/municipios/'+id.substring(0,5),
    {
        method: 'GET',
        })
        .then(response => response.json())
        .then(json => { 
            var temp = [];
            temp = JSON.parse(JSON.stringify(json));
            var datos = document.getElementById("div");
            datos.innerHTML = ` <br/><p>Altitud: ${temp.municipio.ALTITUD}</p>
                                <p>Tiempo actual: ${temp.stateSky.description}</p>
                                <p>Temperatuta actual: ${temp.temperatura_actual}</p>
                                <p>Temperatura máxima: ${temp.temperaturas.max}</p>
                                <p>Temperatura mínima: ${temp.temperaturas.min}</p>
                                <p>Humedad: ${temp.humedad}</p>
                                <p>Viento: ${temp.viento}</p>
                                <p>Lluvia: ${temp.lluvia}</p>`;
            
        console.log(json)
        })
}

