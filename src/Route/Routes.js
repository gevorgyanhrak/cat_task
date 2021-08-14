import {Route, Switch} from "react-router-dom";
import React, {lazy, Suspense} from 'react';
import {Loader} from "../components/index";

const Content = lazy(() => import("../components/content/"));

export default function Routes() {
    return (
    <Suspense fallback={<Loader />}>
        <Switch>
            <Route path="/:id" component={Content}/>
            <Route path="/" component={Content}/>
        </Switch>
    </ Suspense>

    )
}