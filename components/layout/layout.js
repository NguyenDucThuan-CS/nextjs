import { Fragment } from "react";
import MainHeader from "./main-header";
function Layout(pops) {
    return <Fragment>
        <MainHeader />
        <main>
            {pops.children}
        </main>
    </Fragment>
}

export default Layout;