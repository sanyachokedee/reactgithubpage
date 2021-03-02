import DocumentTitle from 'react-document-title'
const PageNotFound = () => {
    return (
        <>
            <link rel="stylesheet" href="assets/css/app.css"/>
            <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-warning">
                <DocumentTitle title={'Page not found | Smart Stock'} />
                <h1 className="card p-3">404 page not found</h1>
            </div>
        </>
    )
}

export default PageNotFound