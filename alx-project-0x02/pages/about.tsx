import Card from "@/components/common/Card";
import Header from "@/components/layout/Header";

const About: React.FC =()=>{
    return(
        <div>
            <Header/>
            <h1>About Page</h1>
                        <Card title="EATING" content="BAE" />
            <Card content="ChIPS" title="BOO"/>

        </div>
    )
}
export default About;