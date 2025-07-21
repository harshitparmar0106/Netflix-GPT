import Header from "./Header";

const Login = () => {
    return (
        <div>
            <Header/>
            <div>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/a927b1ee-784d-494a-aa80-cf7a062d2523/web/IN-en-20250714-TRIFECTA-perspective_5acb7337-c372-45ec-ae12-ddb110e6ad78_large.jpg" alt="" />
            </div>
            <form action="">
                <input type="text" placeholder="Email Address" className="" />
            </form>
        </div>
    );
}

export default Login;