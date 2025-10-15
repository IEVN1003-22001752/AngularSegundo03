export class clase {

    nombre: string = '';
    Amaterno: string = '';
    Apaterno: string = '';
    Dia: number = 0;
    Mes: number = 0;
    Año: number = 0;
    resultadoEdad: number = 0;
    resultadoSigno: string = '';
    resultadoNombre: string = '';
    resultadoImagen: string = '';


    calcularEdad() {
        const hoy = new Date();
        const nacimiento = new Date(this.Año, this.Mes - 1, this.Dia); // Mes - 1 porque los meses van de 0 a 11
        let edad = hoy.getFullYear() - nacimiento.getFullYear();

        // Verifica si aún no ha cumplido años este año
        const yaCumplio = hoy.getMonth() > nacimiento.getMonth() ||
            (hoy.getMonth() === nacimiento.getMonth() && hoy.getDate() >= nacimiento.getDate());

        if (!yaCumplio) {
            edad--;
        }

        this.resultadoEdad = edad;
    }


    calcularSigno() {
        const signos: string[] = [
            "Rata", "Buey", "Tigre", "Conejo", "Dragón", "Serpiente",
            "Caballo", "Cabra", "Mono", "Gallo", "Perro", "Cerdo"
        ];

        const base = 1900;
        const diferencia = this.Año - base;
        const indiceAjustado = (diferencia % 12 + 12) % 12;

        const signoCalculado = signos[indiceAjustado];
        this.resultadoSigno = ' ' + signoCalculado;

        let urlImagen = '';

        switch (signoCalculado) {
            case "Rata":
                urlImagen = "https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Rata.jpg";
                break;
            case "Buey":
                urlImagen = "https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Buey.jpg";
                break;
            case "Tigre":
                urlImagen = "https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Tigre.jpg";
                break;
            case "Conejo":
                urlImagen = "https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Conejo.jpg";
                break;
            case "Dragón":
                urlImagen = "https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Dragon.jpg";
                break;
            case "Serpiente":
                urlImagen = "https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Serpiente.jpg";
                break;
            case "Caballo":
                urlImagen = "https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Caballo.jpg";
                break;
            case "Cabra":
                urlImagen = "https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Cabra.jpg";
                break;
            case "Mono":
                urlImagen = "https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Mono.jpg";
                break;
            case "Gallo":
                urlImagen = "https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Gallo.jpg";
                break;
            case "Perro":
                urlImagen = "https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Perro.jpg";
                break;
            case "Cerdo":
                urlImagen = "https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Cerdo.jpg";
                break;
            default:
                urlImagen = '';
                break;
        }

        this.resultadoImagen = urlImagen;
    }

    calcularNombre() {
        this.resultadoNombre = this.nombre + ' ' + this.Amaterno + ' ' + this.Apaterno
    }
}