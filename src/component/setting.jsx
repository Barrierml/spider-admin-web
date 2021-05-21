import { connect } from "react-redux";
import { Grid, TextField } from "@material-ui/core"
import { find } from "lodash";
import Dialog from "./dialog"
import { wsSetSpider } from "../ws/ws";
import store from "../store/store";
import { useState } from "react";




async function setSpider(name, cron) {
    let res = await wsSetSpider(name, { scheduler: cron })
    if (res) {
        store.dispatch({
            type: ""
        })
    }
}


function Setting(props) {

    let [cron, setCron] = useState(props.rate);
    let [cpu, setCpu] = useState(props.cpu);

    return (
        <Dialog {...props} okText="保存" onConfrim={() => { setSpider(props.name, cron); props?.onClose() }}>
            <Grid style={{ minWidth: "30vw", padding: "10px 20px" }} container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        type="text"
                        value={cron}
                        onChange={(e) => setCron(e.target.value)}
                        label="cron设置"
                        variant="outlined"
                        placeholder="* * * * * *"
                        style={{ width: "100%" }} />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        type="text"
                        label="cpu限制"
                        placeholder="99"
                        variant="outlined"
                        fullWidth
                        value={cpu}
                        onChange={(e) => setCpu(e.target.value)}
                    />
                </Grid>
            </Grid>
        </Dialog>
    )
}


function stateToProps(state, props) {
    let ww = find(state.allSpiders.list, { name: props.name });
    return {
        rate: ww.rate,
    }
}

export default connect(stateToProps)(Setting)