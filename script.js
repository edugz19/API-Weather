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
            datos.innerHTML = ` <table id="table">
                                    <tr>   
                                        <th id="title">Tiempo en ${temp.municipio.NOMBRE}</th>
                                    </tr>
                                    <tr>   
                                        <th>Altitud</th>
                                        <td>${temp.municipio.ALTITUD}</td>
                                    </tr>
                                    <tr>   
                                        <th>Tiempo actual</th>
                                        <td>${temp.stateSky.description}</td>
                                    </tr>
                                    <tr>   
                                        <th>Temperatura actual</th>
                                        <td>${temp.temperatura_actual}</td>
                                    </tr>
                                    <tr>   
                                        <th>Temperatura máxima</th>
                                        <td>${temp.temperaturas.max}</td>
                                    </tr>
                                    <tr>   
                                        <th>Temperatura mínima</th>
                                        <td>${temp.temperaturas.min}</td>
                                    </tr>
                                    <tr>   
                                        <th>Humedad</th>
                                        <td>${temp.humedad}</td>
                                    </tr>
                                    <tr>   
                                        <th>Viento</th>
                                        <td>${temp.viento}</td>
                                    </tr>
                                    <tr>   
                                        <th>Lluvia</th>
                                        <td>${temp.lluvia}</td>
                                    </tr>
                                </table>`;
        console.log(json)
        })
}
