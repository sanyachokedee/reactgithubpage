import DocumentTitle from "react-document-title";

const AuthLayout = ( {children , title="Home"} ) => {

    return (
        <>
        <DocumentTitle title={title +" | Smart Stock"} />
        { /* css   เอาไว้ตรงนี้จะ performance ไม่ไดี เวล่าเปิดจะมีขาวๆ ขึ้นสั้นๆ*/}
        {/* <link rel="stylesheet" href="assets/css/app.css"/> */}
        <div className ="bg-info">
            <div className="d-flex flex-column align-items-center justify-content-center vh-100">
                {children}
            </div>
        </div>
        { /* js  เอาไว้ตรงนี้จะ performance ไม่ไดี เวล่าเปิดจะมีขาวๆ ขึ้นสั้นๆ*/}
        {/* <script src="assetes/js/app.js"></script> */}
        </>
    )
}

export default AuthLayout
