function juegoMatienso() {
	document.getElementById("customPrompt").style.display = "block";
}

function verificarMate() {
	let tipoDeMate = document.getElementById("mateInput").value.toLowerCase();

	let mate = "calabaza",
		mateDos = "hueso",
		mateTres = "vidrio",
		mateCuatro = "madera",
		mateCinco = "metal",
		mateSeis = "plastico",
		mateSiete = "caña";

	switch (tipoDeMate) {
		case mate:
			mostrarMensaje(
				"Conocidos también como mate porongo o mate poro, es uno de los más tradicionales que existen, ya que gracias a su forma redondeada y la cascara dura que la recubre en el exterior, permiten que sea un excelente recipiente para utilizarlo como mate. Se realizan a partir de la fruta de la calabaza, formando un hueco en su interior para extraer la pulpa y acto seguido ponerlas a secar. Además, suelen ser decoradas artesanalmente para darle un mayor atractivo."
			);
			break;
		case mateDos:
			mostrarMensaje(
				"Son los confeccionados en cuernos o pezuñas de animales, suelen ser más anchos en la base para poseer un mejor apoyo. Por fuera suelen ser recubiertos con cuero, una capa de metal o plata, decorados con ornamentos o detalles que los vuelven más llamativos."
			);
			break;
		case mateTres:
			mostrarMensaje(
				"Actualmente es muy común encontrar mates fundidos en vidrio, el cual en la mayoría de los casos resulta ser vidrio reciclado. Su mayor ventaja podría decirse que es que este material no influye en absoluto en el sabor de la infusión, por lo que se puede apreciar mejor el verdadero sabor de la yerba mate."
			);
			break;
		case mateCuatro:
			mostrarMensaje(
				"Los mates de madera suelen realizarse con maderas de quebracho, palo santo o roble. Cada uno influye en el sabor del mate de diferente manera, por eso mismo se suelen evitar maderas que sean demasiado aromáticas ya que podría afectar al sabor de la infusión. El mate de madera suele aportar una estética rustica, pero con la versatilidad de tener decoraciones muy variadas acorde a los gustos de su portador."
			);
			break;
		case mateCinco:
			mostrarMensaje(
				"Estos recipientes pueden realizarse tanto en plata como acero inoxidable. Estos mates suelen ser muy duraderos gracias a su material, resistente a golpes y caídas tanto como a la corrosión y oxido. Aunque posee una pequeña desventaja debido a que el calor del agua puede aumentar su temperatura, por lo que normalmente se lo suele implementar más para las infusiones frías como el terere."
			);
			break;
		case mateSeis:
			mostrarMensaje(
				"Los mates de plástico son los últimos en incorporarse a esta gran variedad de materiales, actualmente son tendencia gracias a sus colores y las diversas formas tan originales que se pueden conseguir gracias a la maniobrabilidad de este material. Su fabricación suele ser mucho más económica, por lo que estos se consiguen a un precio más accesible. Pero se debe tener en cuenta que para que el plástico no afecte al sabor del mate, se recomienda no utilizar agua demasiado caliente."
			);
			break;
		case mateSiete:
			mostrarMensaje(
				"Estos son realizados especialmente con cañas de bambú, las cuales son seleccionadas y pulidas antes de aplicarles una capa de barniz. Esta madera es muy resistente, ya que al crecer en ambientes de temperaturas extremas esto se convierte en una ventaja, permitiéndole resistir muy bien el agua caliente. El sabor que le aportan las cañas de bambú se diferencia mucho del resto, así que te invitamos a probarlo."
			);
			break;
		default:
			mostrarMensaje("Lo siento no conozco ese tipo de mate");
			break;
	}

	document.getElementById("customPrompt").style.display = "none";
}

function mostrarMensaje(mensaje) {
	let messageContainer = document.getElementById("messageContainer");
	messageContainer.innerHTML = mensaje;
	messageContainer.style.display = "block";

	setTimeout(function () {
		messageContainer.style.display = "none";
	}, 20000);
}
