import styles from "./CandidateCard.module.css";

function CandidateCard({item}) {
 
 const {name,avatar,rating,title,salary,company_name,id}=item
 // console.log(name,avatar,rating,title,salary,company_name,id)
  return (
    <div data-testid="candidate-container" className={styles.container}>
      <img alt="logo" src={avatar} width="100px" height="100px" />
      <div>
        <div>Name:{name}</div>
        <div>Title{title} & Company Name:{company_name}</div>
      </div>
      <div>${salary} Salary</div>
    </div>
  );
}

export default CandidateCard;
