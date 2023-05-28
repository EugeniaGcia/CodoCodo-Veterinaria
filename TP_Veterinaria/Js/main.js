// barra de navegacion
let barraNavJs = `
<nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="index.html">
                    <img src="Imagenes/huella Logo.png" alt="Logo">
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse justify-content-start">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="index.html">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="nosotoros.html">Nosotros</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="servicios.html">Servicios</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="turnos.html">Turno Online</a>
                        </li>
                    </ul>
                </div>
            </nav>
`
document.getElementById("barraNav").innerHTML = barraNavJs



// Pie de pagina con formulario de contacto
let footerFormContacto = `
<div class="footer-form">

<div class="footer-izquierda">
    <img src="Imagenes/huella Logo.png" alt="Logo">
    <p>Amamos a los animales y sabemos que cada mascota que recibimos es parte de una familia</p>
    <div class="social-icons">
        <a href="Imagenes/facebook.png"></a>
        <a href="Imagenes/facebook.png"></a>
        <a href="Imagenes/instagram.png"></a>
    </div>
</div>

<div class="footer-derecha">
    <h2>Formulario de contacto</h2>

    <form id="contact-form" class="contact-form" action="./show-data.html"">
        <div class="form-group">
            <label for="full-name">Apellido y Nombre</label>
            <input type="text" id="full-name" name="full-name" required>
        </div>
        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required>
        </div>
        <div class="form-group">
            <label for="phone">Teléfono</label>
            <input type="tel" id="phone" name="phone" required>
        </div>
        <div class="form-group">
            <label for="message">Consulta</label>
            <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit" class="button">Enviar</button>
    </form>

</div>
</div>
`

document.getElementById("footerForm").innerHTML = footerFormContacto;

