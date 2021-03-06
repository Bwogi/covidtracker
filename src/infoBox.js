import React from 'react';
import { Card, CardContent, Typography } from "@material-ui/core";

function infoBox({title, cases, total}) {
    return (
        <Card className="infoBox">
            <CardContent>
                {/* Title */}
                <Typography className="infoBox__title" color="textSecondary">
                    {title}
                </Typography>
                {/* Number of Cases */}
                <h4 className="infoBox__cases"> {cases} Today</h4> 
                {/* Total */}
                <Typography className="infoBox__total" color="textSecondary">
                    {total} Total
                </Typography>
            </CardContent>
            
        </Card>
    )
}

export default infoBox
