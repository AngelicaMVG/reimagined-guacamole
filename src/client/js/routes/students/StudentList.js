import React, { Component, Fragment } from "react";
import moduleName from "../../shared/grid/Section";
import req from "superagent";
import Section from "../../shared/grid/Section";
import Box from "../../shared/box/Box";
import Button from "../../shared/button/Button";
import MyLink from "../../shared/link/MyLink";
import StudentListItem from "./StudentListItem";
import Area from "../../shared/grid/Area";
import Grid from "../../shared/grid/Grid";
import Navbar from "../../components/Nav";

export default class StudentList extends Component {
  state = { students: [], allHolidays: 0, today: 0, holidaysToday: 0 };

  componentDidMount() {
    this.getStudents();
    req.get("/api/holidays/1").then(res => {
      this.setState({
        totalDays: res.body.totalDays,
        today: res.body.today,
        holidaysToday: res.body.holidaysToday
      });
    });
  }

  getStudents = () => {
    req.get("/api/students").then(res => {
      this.setState({ students: res.body });
    });
  };

  updateDaysAndHolidays = e => {
    e.preventDefault();
    req
      .put("/api/holidays/1")
      .set("Content-Type", "application/x-www-form-urlencoded")
      .send({
        allHolidays: parseInt(this.refs.allHolidays.value),
        today: parseInt(this.refs.today.value),
        holidaysToday: parseInt(this.refs.holidaysToday.value)
      })
      .then(res => {
        alert("Información enviada");
      });
  };

  onChange = e => {
    this.setState({
      [e.target.name]: parseInt(e.target.value)
    });
  };

  render() {
    return (
      <div style={{ fontFamily: "Libre Franklin" }}>
        <Grid
          height="100%"
          width="100%"
          gap="20px"
          template={`" top top top top" 50px ".  content content ." auto`}
        >
          <Area area="top">
            <Navbar
              isAuthenticated={this.state.isAuthenticated}
              updateNoAuthorization={this.updateNoAuthorization}
            />
          </Area>
          <Area area=" content">
            <Section style={{ margin: "10%" }}>
              <h2 style={{ color: "#fff" }}>Información General</h2>
              {/* <Box justifyContent="flex-end">
            <Button
              style={{ marginBottom: '5%' }}
              bgColor="#2C308D"
              // onClick={() => this.props.history.push('/api/students/new')}
            >
              Crear Estudiante
            </Button>
          </Box> */}
              <form onSubmit={this.updateDaysAndHolidays}>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div style={{ textAlign: "center  " }}>
                    <label
                      htmlFor="asuetos"
                      style={{ margin: "20px", color: "white" }}
                    >
                      Asuetos Totales
                    </label>

                    <select
                      name="allHolidays"
                      onChange={this.onChange}
                      ref="allHolidays"
                    >
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </div>

                  <div style={{ textAlign: "center" }}>
                    <label style={{ margin: "30px", color: "white" }}>
                      Día Actual
                    </label>
                    <input
                      type="text"
                      name="today"
                      ref="today"
                      onChange={this.onChange}
                    />
                  </div>

                  <div style={{ textAlign: "center" }}>
                    <label style={{ margin: "20px", color: "white" }}>
                      Asuetos hasta hoy
                    </label>
                    <select
                      name="holidaysToday"
                      onChange={this.onChange}
                      ref="holidaysToday"
                    >
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </div>
                  <button>send</button>
                </div>
              </form>

              <h2 style={{ color: "#fff", marginTop: "50px" }}>
                Información General Actual
              </h2>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  color: "white"
                }}
              >
                <h3> Asuetos Totales: {this.state.allHolidays}</h3>
                <h3> Día: {this.state.today}</h3>
                <h3> Asuetos hasta hoy: {this.state.holidaysToday}</h3>
              </div>
            </Section>
            <h2 style={{ color: "#fff" }}>Estudiantes CIMI</h2>
            {this.state.students.length && (
              <div>
                {this.state.students.map(student => (
                  <MyLink to={`/students/${student.id}`} key={student.id}>
                    <StudentListItem key={student.id} student={student} />
                  </MyLink>
                ))}
              </div>
            )}
          </Area>
        </Grid>
      </div>
    );
  }
}
