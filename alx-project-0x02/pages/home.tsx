import Card from "@/components/common/Card";
import Header from "@/components/layout/Header";

const Home: React.FC =()=>{
    return(
       
        <div>
            <Header/>
            <h1>HOME PAGE</h1>
            <Card title="EATING" content="BAE" />
            <Card content="ChIPS" title="BOO"/>
        </div>
    )
}
export default Home;