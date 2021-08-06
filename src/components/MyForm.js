import React from 'react';
class MyForm extends React.Component {
    constructor(props) {
        super()
        this.curriculum = React.createRef()
        this.handleSubmit = this.handleSubmit.bind(this)
      }
      handleSubmit(event) {
        alert(this.curriculum.current.files[0].name)
        event.preventDefault()
      }
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <input type="file" ref={this.curriculum} />
            <input type="submit" value="Submit" />
          </form>
        )
      }
    }
export default MyForm;
