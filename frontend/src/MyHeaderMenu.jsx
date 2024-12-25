function MyHeaderMenu(){
    return (<div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Túrisztikai látványosságok</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Listázás</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Adatrögzítés 
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="http://127.0.0.1:8000/ujorszag/"><i class="bi bi-card-list"> - Új ország rögzítése</i></a></li>
                                <li><hr class="dropdown-divider"/></li>
                                <li><a class="dropdown-item" href="http://127.0.0.1:8000/ujvaros/"><i class="bi bi-card-list"> - Új város rögzítése</i></a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="http://127.0.0.1:8000/feladat/">Feladatmeghatározás</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="http://127.0.0.1:8000/kapcsolat/" >Kapcsolat</a>
                        </li>

                        {/*
                        <li class="nav-item">
                            <a class="nav-link" href="{% url 'data-error' %}" aria-disabled="true">Data Error</a>
                        </li>
                        */}
                    </ul>
                </div>
            </div>
        </nav>
    </div>)
}

export default MyHeaderMenu