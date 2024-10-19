export function CadastroProduto() {
    return (
        <div>
            <h1 className='mt-3 mb-3'>Cadastro de Produtos</h1>

            <form>

                <div className="row mb-3">

                    <div className="col">
                        <input type="text" placeholder="Nome do produto" className="form-control" />
                    </div>

                    <div className="col">
                        <input type="text" placeholder="Valor" className="form-control" />
                    </div>

                    <div className="col">
                        <input type="text" placeholder="Quantidade" className="form-control" />
                    </div>

                </div>

                <div className="row mb-3">
                    <div className="col">
                        <input type="text" placeholder="Url da imagem" className="form-control" />
                    </div>
                </div>

                <div className="btn-group d-flex gap-3">
                    <button className='btn btn-outline-success'>Inserir</button>
                    <button className='btn btn-outline-primary'>Salvar</button>
                </div>

            </form>

            <table>

            </table>
        </div>
    )
}