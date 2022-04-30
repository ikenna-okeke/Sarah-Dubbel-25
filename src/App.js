import { useEffect, useState } from "react";
import Header from "./Components/Header";
import classes from "./App.module.css";
import Card from "./Card";

function App() {
  const [remainingDays, setRemainingDays] = useState("00");
  const [hoursUntill, setHoursUntil] = useState("00");
  const [minutesUntil, setMinutesUntil] = useState("00");
  const [secondsUntil, setSecondsUntil] = useState("00");
  const [controller, setController] = useState(null);
  const [isbtn, setIsBtn] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const days = new Date().getTime();
      const birthday = new Date("May 3, 2022 00:00:00").getTime();

      const daysUntill = (birthday - days) / (1000 * 60 * 60 * 24);
      if (birthday - days < 0) {
        setController(true);
        return;
      }
      setRemainingDays(Math.floor(daysUntill.toFixed(0)));
      setHoursUntil(((daysUntill * 24) % 24).toFixed(0));
      setMinutesUntil(Math.floor((daysUntill * (24 * 60)) % 60));
      setSecondsUntil(Math.floor((daysUntill * (24 * 60 * 60)) % 60));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const clickHandler = () => {
    setIsBtn(true);
  };

  useEffect(() => {
    setInterval(() => {
      setIsBtn(false);
    }, 8000);
  }, []);

  return (
    <Card load={controller}>
      <Header />
      {isbtn && (
        <h1 className={classes.hbtn}>
          Hey Hope you are FULLY RECOVERED SOON!!! Daddy does not like his
          little girl sick
        </h1>
      )}

      <div className={classes.container}>
        {!controller && (
          <h2 className={classes.h2}>
            Days To Your BirthDay:
            <span>{`  ${remainingDays} Days: ${hoursUntill}: ${minutesUntil}: ${secondsUntil}`}</span>
          </h2>
        )}
        {controller && (
          <h1 className={classes.h1}>HAPPY 25th BIRTHDAY SARAH DUBBEL</h1>
        )}
        <button className={classes.btn} onClick={clickHandler}>
          Hey Sick Beauty!!! Click Me
        </button>
        ;
      </div>
    </Card>
  );
}

export default App;
