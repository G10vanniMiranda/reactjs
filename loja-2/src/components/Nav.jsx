export function Nav() {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid gap-2">

                <a class="navbar-brand bg-success p-3 rounded-5 text-white" href="#">Treina-Dev</a>
                
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex gap-2">
                        
                        <li class="nav-item btn btn-outline-primary">
                            <a class="nav-link" href="#">Loja</a>
                        </li>
                        
                        <li class="nav-item btn btn-outline-primary">
                            <a class="nav-link" href="#">Contato</a>
                        </li>
                        
                        <li class="nav-item btn btn-outline-primary">
                            <a class="nav-link" href="#">Nossas Redes</a>
                        </li>
                        
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Produtos
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Notebooks</a></li>
                                <li><hr class="dropdown-divider" /> </li>
                                <li><a class="dropdown-item" href="#">Camêras</a></li>
                                <li><hr class="dropdown-divider" /> </li>
                                <li><a class="dropdown-item" href="#">Games</a></li>
                                <li><hr class="dropdown-divider" /> </li>
                                <li><a class="dropdown-item" href="#">PC Games</a></li>
                                <li><hr class="dropdown-divider" /> </li>
                                <li><a class="dropdown-item" href="#">Outros</a></li>
                            </ul>
                        </li>

                    </ul>

                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Buscar ..." aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Buscar</button>
                    </form>

                </div>

            </div>
        </nav>
    )
}