import React, { Component } from 'react'
import { Link, Redirect } from '@reach/router'

class ErrorBoundary extends Component {
  state = { hasError: false, redirect: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught an error', info)
  }

  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => {
        this.setState({ redirect: true })
      }, 5000)
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />
    }

    if (this.state.hasError) {
      return (
        <h1>
          We got an error. Click <Link to="/">here</Link> to get back to home
          page.
        </h1>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
