import Button from "@/components/common/Button";
import Card from "@/components/common/Card";
import Header from "@/components/layout/Header";

const About: React.FC =()=>{
    return(
        <div>
            <Header/>
            <h1>About Page</h1>
                        <Card title="EATING" content="BAE" />
            <Card content="ChIPS" title="BOO"/>
 <h1 className="text-2xl font-bold">About Page</h1>

      <Button title="Small Button" size="small" shape="rounded-sm" />
      <Button title="Medium Button" size="medium" shape="rounded-md" />
      <Button title="Large Button" size="large" shape="rounded-full" />
        </div>
    )
}
export default About;