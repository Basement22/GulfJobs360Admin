import React from "react";

// reactstrap components
import { Container, Button } from "reactstrap";

class SimpleHeader extends React.Component {
    render() {
        return (
            <>
                <div className="header bg-gradient-dark  pt-5 pt-md-7">
                    <Container fluid>
                        <div className="header-body">
                            {/* Card stats */}

                        </div>
                    </Container>
                </div>
            </>
        );
    }
}

export default SimpleHeader;
