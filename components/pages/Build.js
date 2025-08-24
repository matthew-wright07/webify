import LeftSidebar from "../builder/sidebars/LeftSidebar"
import Preview from "../builder/preview/Preview"
import Grid from "../builder/wrappers/Grid"
import TopBar from "../builder/topbar/TopBar"
import FlexCol from "../builder/wrappers/FlexCol"

export default function Build(){
    return (
        <FlexCol>
            <TopBar/>
            <Grid>
                <LeftSidebar/>
                <Preview/>
            </Grid>
        </FlexCol>
    )
}