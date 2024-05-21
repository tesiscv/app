export function printDiv2(nombre, apellido, nacionalidad,edad, ciudad, pais, estudios, conocimientos, experiencias,cursos, idiomas, languageTexts,comentarios, skills) {

    var a = window.open("", "", "height=1000, width=1000");
    a.document.write("<html><body>");

    //Encabezado
    a.document
      .write(`<div style="display: block; align-items: center; width:1000;"> <div style="display: flex;
          margin: 15px 5px;">`);
    a.document.write(
        '<img style="width: 120;" src="./assets/images/logo.png" alt="logo">'
    );
    a.document.write(
      '<h3 style="flex: 1; text-align: right; font-family: \'Franklin Gothic Medium Cond\'; font-size: 18px; color: #31DCFE !important; margin-right: 100px;">Curriculum Vitae</h3>'
    );
    a.document.write("</div>");
    a.document.write("</div>");


    // CV
    a.document.write('<div style="margin-bottom:2%; text-align: left; margin-top:3%;">');
    a.document.write(
      '<label style="font-size: 25px; font-family: \'Franklin Gothic Medium Cond\';">Curriculum Vitae</label>'
    );
    a.document.write("</div>");

    //SEPARAMIENTO DEL PDF
    a.document.write(
      '<div style="display: inline-block; align-items: center; width:100%;">'
    );
  
  
    // =========== 1. DATOS PERSONALES ============
    a.document.write(
      '<div style="display: flex; border-bottom: 1px solid black;">'
    );
    a.document.write('<div style="display: flex; ">');
    a.document.write(
      '<label style="font-weight: bold; font-family: \'Franklin Gothic Medium Cond\'; font-size: 20px; margin-top: 2%; ">'+ languageTexts.datospersonales +'</label>'
    );
    a.document.write("</div>");
    a.document.write("</div>");
  
    // =========== Apellido y Nombre ============
    a.document.write('<div style="display: flex; margin-top: 15px;">');
    a.document.write('<div style="font-weight: bold; flex:10; font-family: \'Arial\'; font-size: 18px;"><label>' + languageTexts.apellidonombre + ': ' + apellido + ' ' + nombre + '</label></div>');
    a.document.write("</div>");

    // =========== Nacionalidad ============
    a.document.write('<div style="display: flex; margin-top: 10px;">');
    a.document.write('<div style="font-weight: bold; flex:6; font-family: \'Arial\'; font-size: 18px;"><label>'  + languageTexts.nacionalidad+  ': ' + nacionalidad + '</label></div>');
    a.document.write("</div>");

    // =========== Edad ============
    a.document.write('<div style="display: flex; margin-top: 10px;">');
    a.document.write('<div style="font-weight: bold; flex:6; font-family: \'Arial\'; font-size: 18px;"><label>' + languageTexts.residenciaactual + ': ' + ciudad + '</label></div>');
    a.document.write("</div>");

    // =========== Edad ============
    a.document.write('<div style="display: flex; margin-top: 10px;">');
    a.document.write('<div style="font-weight: bold; flex:6; font-family: \'Arial\'; font-size: 18px;"><label>' + languageTexts.edad + ': ' + edad + '</label></div>');
    a.document.write("</div>");

    // =========== ESTUDIOS CURSADOS ============
    a.document.write(
      '<div style="display: flex; border-bottom: 1px solid black;">'
    );
    a.document.write('<div style="display: flex; margin-top:3%;">');
    a.document.write(
      '<label style="font-weight: bold; font-family: \'Franklin Gothic Medium Cond\'; font-size: 20px; margin-top: 2%; ">' + languageTexts.estudioscursados + '</label>'
    );
    a.document.write("</div>");
    a.document.write("</div>");

    // Supongamos que estudios es un arreglo de objetos con la estructura { nombreUniversidad, carrera, generacion }
    // Iteramos sobre cada objeto en el arreglo
    estudios.forEach(estudio => {
      // =========== Universidad ============
      a.document.write('<div style="display: flex; margin-top: 15px;">');
      a.document.write(`<div style="font-weight: bold; flex:5; font-family: \'Arial\'; font-size: 18px;"><label>${estudio.universidad}</label></div>`);
      a.document.write("</div>");

      // =========== Carrera ============
      a.document.write('<div style="display: flex; margin-top: 10px;">');
      a.document.write(`<div style="flex:1; font-family: \'Arial\'; font-size: 18px;"><label>${languageTexts.carrera}: <strong>${estudio.carrera}</strong></label></div>`);
      a.document.write("</div>");

      
      // =========== Fecha inicio ============
      a.document.write('<div style="display: flex; margin-top: 10px;">');
      a.document.write(`<div style="flex:2; font-family: \'Arial\'; font-size: 18px;"><label>${languageTexts.fechaInicio}: <strong>${estudio.fechaIni.getFullYear()}</strong></label></div>`);
      a.document.write("</div>");

      // =========== Generacion ============
      a.document.write('<div style="display: flex; margin-top: 10px;">');
      
      
      const fechaHoy = new Date();

      // Validación para reemplazar el año con "Actualmente" si la fecha coincide con la fecha de hoy
      if (estudio.generacion.getDate() === fechaHoy.getDate() &&
          estudio.generacion.getMonth() === fechaHoy.getMonth() &&
          estudio.generacion.getFullYear() === fechaHoy.getFullYear()) {
            a.document.write(`<div style="flex:2; font-family: \'Arial\'; font-size: 18px;"><label>${languageTexts.generacion}: <strong>${languageTexts.actualidad}</strong></label></div>`);
      } else {
        a.document.write(`<div style="flex:2; font-family: \'Arial\'; font-size: 18px;"><label>${languageTexts.generacion}: <strong>${estudio.generacion.getFullYear()}</strong></label></div>`);
      }

      a.document.write("</div>");
    });


    // =========== CONOCIMIENTOS ============
  
    
    // Si hay tanto conocimientos como skills, mostramos dos columnas
    if (conocimientos.length > 0 && skills.length > 0) {
        a.document.write('<div style="display: flex; width: 100%;">');
    

    // Columna de conocimientos
    a.document.write('<div style="flex: 1; margin-right: 20px;">');
    a.document.write('<div style="display: flex; flex-direction: column; margin-top:3%; border-bottom: 1px solid black;">');
    a.document.write('<label style="font-weight: bold; font-family: \'Franklin Gothic Medium Cond\'; font-size: 20px; margin-top: 2%;">' + languageTexts.conocimientotec + '</label>');
    a.document.write('</div>');

    const numConocimientos = conocimientos.length;

    for (let j = 0; j < numConocimientos; j++) {
        const conocimiento = conocimientos[j];
        // =========== Conocimiento ============
        a.document.write('<div style="display: flex; align-items: center; margin-top: 10px;">');
        a.document.write('<div style="font-family: Arial; font-size: 18px; margin-right: 10px;"><label>•</label></div>');
        a.document.write(`<div style="font-family: Arial; font-size: 18px;"><label>${conocimiento.conocimiento}</label></div>`);
        a.document.write('</div>');
    }

    a.document.write('</div>');

    // Columna de habilidades
    a.document.write('<div style="flex: 1; margin-left: 20px;">');
    a.document.write('<div style="display: flex; flex-direction: column; margin-top:3%; border-bottom: 1px solid black;">');
    a.document.write('<label style="font-weight: bold; font-family: \'Franklin Gothic Medium Cond\'; font-size: 20px; margin-top: 2%;">' + languageTexts.skillEt + '</label>');
    a.document.write('</div>');

    const numSkills = skills.length;

    for (let j = 0; j < numSkills; j++) {
        const skill = skills[j];
        // =========== Skill ============
        a.document.write('<div style="display: flex; align-items: center; margin-top: 10px;">');
        a.document.write('<div style="font-family: Arial; font-size: 18px; margin-right: 10px;"><label>•</label></div>');
        a.document.write(`<div style="font-family: Arial; font-size: 18px;"><label>${skill.skill}</label></div>`);
        a.document.write('</div>');
    }

    a.document.write('</div>');
    a.document.write('</div>');
    } else {
      a.document.write('<div style="display: flex; border-bottom: 1px solid black;">');
      a.document.write('<div style="display: flex; flex-direction: column; margin-top:3%;">');
      a.document.write('<label style="font-weight: bold; font-family: \'Franklin Gothic Medium Cond\'; font-size: 20px; margin-top: 2%;">' + languageTexts.conocimientotec + '</label>');
      a.document.write('</div>'); // Cerramos la última columna
      a.document.write("</div>");
        // Si no hay skills, mostramos solo la columna de conocimientos como está actualmente
        a.document.write('<div style="display: flex;">');
    
        const numConocimientos = conocimientos.length;
        const numColumnas = Math.ceil(numConocimientos / 8); // Calcula el número de columnas necesarias
    
        for (let i = 0; i < numColumnas; i++) {
            // Abre una nueva columna
            a.document.write('<div style="flex: 1; margin-right: 20px;">');
    
            // Itera sobre los 8 conocimientos para esta columna o menos si no hay suficientes
            for (let j = i * 8; j < Math.min((i + 1) * 8, numConocimientos); j++) {
                const conocimiento = conocimientos[j];
                // =========== Conocimiento ============
                a.document.write('<div style="display: flex; align-items: center; margin-top: 10px;">');
                a.document.write('<div style="font-family: Arial; font-size: 18px; margin-right: 10px;"><label>•</label></div>');
                a.document.write(`<div style="font-family: Arial; font-size: 18px;"><label>${conocimiento.conocimiento}</label></div>`);
                a.document.write('</div>');
            }
    
            // Si la columna no tiene 8 conocimientos, añade espacios en blanco
            const numConocimientosEnColumna = Math.min(numConocimientos - i * 8, 8);
            for (let k = numConocimientosEnColumna; k < 8; k++) {
                a.document.write('<div style="height: 22px;"></div>'); // Espacio en blanco para completar 8 elementos
            }
    
            // Cierra la columna actual
            a.document.write('</div>');
        }
    
        a.document.write('</div>'); // Cierra el contenedor de la única columna
    }
    

    // =========== EXPERIENCIA LAB ============
    a.document.write(
      '<div style="display: flex; border-bottom: 1px solid black;">'
    );
    a.document.write('<div style="display: flex; margin-top:3%;">');
    a.document.write(
      '<label style="font-weight: bold; font-family: \'Franklin Gothic Medium Cond\'; font-size: 20px; margin-top: 2%; ">'+languageTexts.experiencialab+'</label>'
    );
    a.document.write("</div>");
    a.document.write("</div>");

    function capitalizarPrimeraLetra(cadena) {
      return cadena.charAt(0).toUpperCase() + cadena.slice(1);
    }

    // Iteramos sobre cada objeto en el arreglo
    experiencias.forEach(experiencia => {
      // =========== Puesto ============
      a.document.write('<div style="display: flex; margin-top: 15px;">');
      a.document.write('<div style="flex:1; font-family: \'Arial\'; font-size: 18px;"><label>'+languageTexts.puesto+': <strong>'+experiencia.puesto+'</strong></label></div>');
      a.document.write("</div>");

      // =========== Empresa ============
      a.document.write('<div style="display: flex; margin-top: 10px;">');
      a.document.write('<div style="flex:1; font-family: \'Arial\'; font-size: 18px;"><label>'+languageTexts.empresa+': <strong>'+experiencia.empresa+'</strong></label></div>');
      a.document.write("</div>");

      // =========== Tiempo ============
      // Convertir las fechas a objetos de fecha JavaScri
      
      const fechaInicio = new Date(experiencia.fechaIni);
      const fechaFin = new Date(experiencia.fechaFin);

      // Obtener el mes y el año actual
      const mesActual = capitalizarPrimeraLetra(new Date().toLocaleString('default', { month: 'long' }));
      const añoActual = new Date().getFullYear();

      // Extraer el mes y el año de cada fecha
      const mesInicio = capitalizarPrimeraLetra(fechaInicio.toLocaleString('default', { month: 'long' }));
      const añoInicio = fechaInicio.getFullYear();
      let mesFin, añoFin;

      // Verificar si la fecha fin es igual al mes y año actuales
      if (fechaFin.getMonth() === new Date().getMonth() && fechaFin.getFullYear() === añoActual) {
          mesFin = languageTexts.actualidad;
          añoFin = "";
      } else {
          mesFin = capitalizarPrimeraLetra(fechaFin.toLocaleString('default', { month: 'long' }));
          añoFin = fechaFin.getFullYear();
      }

      // Construir la cadena de tiempo formateada
      const tiempoFormateado = `${mesInicio} ${añoInicio} - ${mesFin} ${añoFin}`;

      // Escribir en el documento
      a.document.write('<div style="display: flex; margin-top: 10px;">');
      a.document.write('<div style="flex:1; font-family: \'Arial\'; font-size: 18px;"><label>'+languageTexts.fecha+': <strong>'+tiempoFormateado+'</strong></label></div>');
      a.document.write("</div>");


      // =========== Logros ============
      a.document.write('<div style="font-weight: bold; font-family: \'Arial\'; font-size: 18px; margin-bottom: 5px; margin-top: 10px;"><label>'+languageTexts.logroet+':</label></div>');
      a.document.write('<div style="font-family: \'Arial\'; font-size: 18px; margin-bottom: 10px;">');
      a.document.write('<ul>'); // Inicio de la lista
      experiencia.actividades.forEach(function(actividad) {
        a.document.write(`<li>${actividad}</li>`); // Mostrar cada actividad como un elemento de lista
      });
      a.document.write('</ul>'); // Fin de la lista
      a.document.write("</div>");


       // =========== Funciones ============
       a.document.write('<div style="font-weight: bold; font-family: \'Arial\'; font-size: 18px; margin-bottom: 5px; margin-top: 10px;"><label>'+languageTexts.funcionet+':</label></div>');
       a.document.write('<div style="font-family: \'Arial\'; font-size: 18px; margin-bottom: 10px;">');
       a.document.write('<ul>'); // Inicio de la lista
       experiencia.funciones.forEach(function(funcion) {
         a.document.write(`<li>${funcion}</li>`); 
       });
       a.document.write('</ul>'); // Fin de la lista
       a.document.write("</div>");
      
      a.document.write("</div>");
    });


    // Verificar si hay cursos antes de escribir el contenido
    if (cursos.length > 0) {
      // =========== CURSOS ============
      a.document.write(
          '<div style="display: flex; border-bottom: 1px solid black;">'
      );
      a.document.write('<div style="display: flex; margin-top:3%;">');
      a.document.write(
          '<label style="font-weight: bold; font-family: \'Franklin Gothic Medium Cond\'; font-size: 20px; margin-top: 2%; ">'+languageTexts.otrosEstudios+'</label>'
      );
      a.document.write("</div>");
      a.document.write("</div>");

      // Iteramos sobre cada objeto en el arreglo
      cursos.forEach(curso => {
          // =========== nombre ============
          a.document.write('<div style="display: flex; margin-top: 15px;">');
          a.document.write(`<div style="font-weight: bold; flex:6; font-family: \'Arial\'; font-size: 18px;"><label>${curso.nombre}</label></div>`);
          a.document.write("</div>");

          // =========== Tiempo ============
          // Convertir las fechas a objetos de fecha JavaScri
          
          const fechaInicio = new Date(curso.fechaIni);
          const fechaFin = new Date(curso.fechaFin);

          // Obtener el mes y el año actual
        const mesActual = capitalizarPrimeraLetra(new Date().toLocaleString('default', { month: 'long' }));
        const añoActual = new Date().getFullYear();

        // Extraer el mes y el año de cada fecha
        const mesInicio = capitalizarPrimeraLetra(fechaInicio.toLocaleString('default', { month: 'long' }));
        const añoInicio = fechaInicio.getFullYear();
        let mesFin, añoFin;

        // Verificar si la fecha fin es igual al mes y año actuales
        if (fechaFin.getMonth() === new Date().getMonth() && fechaFin.getFullYear() === añoActual) {
            mesFin = languageTexts.actualidad;
            añoFin = "";
        } else {
            mesFin = capitalizarPrimeraLetra(fechaFin.toLocaleString('default', { month: 'long' }));
            añoFin = fechaFin.getFullYear();
        }

          // Construir la cadena de tiempo formateada
          const tiempoFormateado = `${mesInicio} ${añoInicio} - ${mesFin} ${añoFin}`;

          // =========== organizacion ============
          a.document.write('<div style="display: flex; margin-top: 10px;">');
          a.document.write(`<div style="font-weight: bold; flex:2; font-family: \'Arial\'; font-size: 18px;"><label>${languageTexts.organizacion}: ${curso.organizacion}</label></div>`);
          a.document.write(`<div style="font-weight: bold; flex:8; font-family: \'Arial\'; font-size: 18px;"><label>${tiempoFormateado}</label></div>`);
          a.document.write("</div>");

          // =========== descripcion ============
          a.document.write('<div style="display: flex; margin-top: 10px;">');
          a.document.write(`<div style="flex:10; font-family: \'Arial\'; font-size: 18px;"><label>${languageTexts.descripcion}: ${curso.descripcion}</label></div>`);
          a.document.write("</div>");

          // =========== Entidad ============
          a.document.write('<div style="display: flex; margin-top: 10px;">');
          a.document.write(`<div style="flex:10; font-family: \'Arial\'; font-size: 18px;"><label>${languageTexts.entidad}: ${curso.entidad}</label></div>`);
          a.document.write("</div>");

                // =========== Horas ============
          a.document.write('<div style="display: flex; margin-top: 10px;">');
          a.document.write(`<div style="flex:10; font-family: \'Arial\'; font-size: 18px;"><label>${languageTexts.tiempodeEst}: ${curso.tiempoEstudio}</label></div>`);
          a.document.write("</div>");

          a.document.write("</div>");
      });
    }

    // =========== IDIOMAS ============
    a.document.write('<div style="display: flex; border-bottom: 1px solid black;">');
    a.document.write('<div style="display: flex; flex-direction: column; margin-top:3%;">');
    a.document.write('<label style="font-weight: bold; font-family: \'Franklin Gothic Medium Cond\'; font-size: 20px; margin-top: 2%; ">'+languageTexts.idiomas+'</label>');
    a.document.write('</div>'); // Cerramos la última columna
    a.document.write("</div>");

    a.document.write('<div style="display: flex;">');

    const numIdiomas = idiomas.length;
    const numColumnasI = Math.ceil(numIdiomas / 8); // Calcula el número de columnas necesarias

    for (let i = 0; i < numColumnasI; i++) {
          // Abre una nueva columna
          a.document.write('<div style="flex: 1; margin-right: 20px;">');

          // Itera sobre los 8 conocimientos para esta columna o menos si no hay suficientes
          for (let j = i * 8; j < Math.min((i + 1) * 8, numIdiomas); j++) {
              const idioma = idiomas[j];
              // =========== Conocimiento ============
              a.document.write('<div style="display: flex; align-items: center; margin-top: 10px;">');
              a.document.write('<div style="font-family: Arial; font-size: 18px; margin-right: 10px;"><label>•</label></div>');
              a.document.write(`<div style="font-family: Arial; font-size: 18px;"><label>${idioma.idioma}</label></div>`);
              a.document.write('</div>');
          }
          
          // Si la columna no tiene 8 conocimientos, añade espacios en blanco
          const numIdiomasEnColumna = Math.min(numIdiomas - i * 8, 8);
          for (let k = numIdiomasEnColumna; k < 8; k++) {
              a.document.write('<div style="height: 22px;"></div>'); // Espacio en blanco para completar 8 elementos
          }
          
          // Cierra la columna actual
          a.document.write('</div>');
      }

      a.document.write('</div>');

      if (comentarios != "") {
        // =========== 9. COMENTARIOS ============
        a.document.write(
          '<div style="display: flex; border-bottom: 1px solid black;">'
        );
        a.document.write('<div style="display: flex; margin-top:3%;">');
        a.document.write(
          '<label style="font-weight: bold; font-family: \'Franklin Gothic Medium Cond\'; font-size: 20px; margin-top: 2%; ">'+languageTexts.comentariotTitulo+'</label>'
        );
        a.document.write("</div>");
        a.document.write("</div>");
      
        // =========== Nota ============
        a.document.write('<div style="display: flex; margin-top: 15px;">');
        a.document.write('<div style=" flex:10; font-family: \'Arial\'; font-size: 18px;"><label>' + languageTexts.comentarios + ': ' + comentarios + '</label></div>');
        a.document.write("</div>");
      }
   
    a.document.write("</body></html>");

    
    a.document.close();
    setTimeout(function () {
      a.print();
    }, 1000);
  }
  