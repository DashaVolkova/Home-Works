
					// Initialize the plugin with no custom options
			$(document).ready(function () {
				// None of the options are set
				$(".pictures").smoothDivScroll({
					autoScrollingMode: "onStart"
				});
			});

			$( "*" ).find( ".conteiner" ).css( "width", "1170px" );
			$( "header" ).next( ".blog" ).css( "background", " #f0f0f0" );
			$( "main" ).prev().css( "height", "90px" );
			$( ".conteiner" ).parent( ".page-header" ).css( "line-height", "90px" );
			$( ".conteiner" ).parents( ".page-header" ).css( "margin", "0" );
			$( ".logo" ).children().css( "display", "inline-block" );
			$( ".logo-img" ).closest( "a" ).css( "text-decoration", "none" );
			$( "article.blog" ).append( "<header class='about' id='contact'><div class='conteiner'>get in touch<div class='gap'></div></div></header>" );
			$( ".footer-page" ).children().prepend( "<section class='copyright'>© 2013 Kyte. All rights reserved. Theme by elemis.</section>" );
			$( ".grey-instagram" ).before( "<a href='#' class='grey-twitter'></a>" );
			$( ".grey-dribbble" ).after( "<a href='#' class='grey-mail'></a>" );
			$( ".nazva" ).text( "Contact details" );

			var contacts = $( "div.contacts1" ).html();
			console.log(contacts);

			$(".heart").click(function () {
        		$(".number").html(+$(".number").text() + 1);
    			});

			//не получилось сделать счетчик лайков. Есть ли какой-то способ, чтобы результат был сохранен без базы данных даже при обновлении страницы?