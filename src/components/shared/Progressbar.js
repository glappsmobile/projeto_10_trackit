import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Progressbar = (props) => (
        <CircularProgressbar 
            {...props} 
            background
            backgroundPadding={6}
            styles={buildStyles({
                backgroundColor: "#52B6FF",
                textColor: "#fff",
                pathColor: "#fff",
                trailColor: "transparent"
            })}
        />
)

export default Progressbar;