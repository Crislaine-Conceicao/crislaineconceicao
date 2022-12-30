
function separadorEndereco (endereco) {
	
	// declaracao de variaveis
	var numero;
	var texto; 
	
	// identifica numero do endereço com o uso de regex e junta o resultado com a funcao join
	// \d+\s+\D$ - d digito numérico - s espaço em branco - D$ digito não numérico EX: 153 B
	// \d+\s+\b\D\s - d digito numérico - s espaço em branco - b borda - D digito não numérico s - espaço em branco EX: 100 Broodway Av 
	// \d+\S+\D - d digito numérico - S sem espaço em branco - D digito não numérico EX: 153B
	// \d digito numérico EX: 153
	numero = endereco.match(/\d+\s+\D$|\d+\s+\b\D\s|\d+\S+\D|\d/g, "").join(""); 
	
	// substitui numero por vazio
	texto = endereco.replace(numero, ""); 
	
	// substitui virgula por vazio
	texto = texto.replace(",", ""); 
	
	// imprime valor textual e numerico do endereço
	console.log(texto);
	console.log(numero);
}

var endereco_1 = "Rua 10";
var endereco_2 = "Av. Brasil 5000";
var endereco_3 = "100 Broodway Av";
var endereco_4 = "Quirino dos Santos 23 b";

separadorEndereco(endereco_1);
separadorEndereco(endereco_2);
separadorEndereco(endereco_3);
separadorEndereco(endereco_4);