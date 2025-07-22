import Card from "@/components/common/Card";
import Header from "@/components/layout/Header";

const Home: React.FC =()=>{
    return(
       
        <div>
            <Header/>
            <h1>HOME PAGE</h1>
            <Card title="EATING" content="CHIPS" />
        </div>
    )
}
export default Home;