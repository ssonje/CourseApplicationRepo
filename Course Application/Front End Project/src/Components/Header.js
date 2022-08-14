import React from "react";
import { Card, CardBody } from "reactstrap";

function Header() {
    return (
        <div>
            <Card className="my-2 bg-warning">
                <CardBody>
                    <h1 className="text-center my-3">Sanket Sonje's Application!</h1>
                </CardBody>
            </Card>
        </div>
    );
}

export default Header;