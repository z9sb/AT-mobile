import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Home from "../screens/Home";

import AT from "../screens/AT";
import AT_01 from "../screens/AT/01";
import AT_02 from "../screens/AT/02";
import AT_03 from "../screens/AT/03";
import AT_04 from "../screens/AT/04";
import AT_05 from "../screens/AT/05";
import AT_06 from "../screens/AT/06";
import AT_07 from "../screens/AT/07";
import AT_08 from "../screens/AT/08";
import AT_09 from "../screens/AT/09";
import AT_10 from "../screens/AT/10";
import AT_11 from "../screens/AT/11";
import AT_12 from "../screens/AT/12";
import AT_13 from "../screens/AT/13";
import AT_14 from "../screens/AT/14";
import AT_15 from "../screens/AT/15";
import AT_16 from "../screens/AT/16";

const router = createBrowserRouter([

    {
        path: '/',
        element: <Home />
    },
    {
        path: '/AT',
        element: <AT />,
    },
    {
        path: '/AT/01',
        element: <AT_01 />,
    },
    {
        path: '/AT/02',
        element: <AT_02 />,
    },
    {
        path: '/AT/03',
        element: <AT_03 />,
    },
    {
        path: '/AT/04',
        element: <AT_04 />,
    },
    {
        path: '/AT/05',
        element: <AT_05 />,
    },
    {
        path: '/AT/06',
        element: <AT_06 />,
    },
    {
        path: '/AT/07',
        element: <AT_07 />,
    },
    {
        path: '/AT/08',
        element: <AT_08 />,
    },
    {
        path: '/AT/09',
        element: <AT_09 />,
    },
    {
        path: '/AT/10',
        element: <AT_10 />,
    },
    {
        path: '/AT/11',
        element: <AT_11 />,
    },
    {
        path: '/AT/12',
        element: <AT_12 />,
    },
    {
        path: '/AT/13',
        element: <AT_13 />,
    },
    {
        path: '/AT/14',
        element: <AT_14 />,
    },
    {
        path: '/AT/15',
        element: <AT_15 />,
    },
    {
        path: '/AT/16',
        element: <AT_16 />,
    },

]);

export default function routes() {
    return (
        <RouterProvider router={router} />
    );
};