import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>Choose your favourite meal from our broad selection of available meals.</p>
      <p>All our meals are cooked with high-quality ingredients.</p>
    </section>
  );
};

export default MealsSummary;