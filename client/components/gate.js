import React from 'react'
import Grid from '@material-ui/core/Grid'
import Slider from '@material-ui/core/Slider'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    width: 200
  }
})
export const Gate = props => {
  const classes = useStyles()
  const [value, setValue] = React.useState(30)
  const handleChange = (event, newValue) => {
    if (newValue === 100) {
      props.changeFunc()
    }
    setValue(newValue)
  }
  return (
    <div className="margins">
      <h1 className="center white huge swordScriptStyle">Dylan Horgan</h1>
      <a href="http://localhost:8080/experience" className="white center large">
        Link
      </a>
      <div className={classes.root}>
        <Grid item xs>
          <Slider
            value={value}
            onChange={handleChange}
            aria-labelledby="continuous-slider"
          />
        </Grid>
      </div>
    </div>
  )
}
