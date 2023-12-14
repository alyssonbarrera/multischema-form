import { Button } from '@/components/Forms/Button'
import { fireEvent, render, screen } from '@testing-library/react'

describe('Form Button Component', () => {
  it('should be able to render the button component correctly with default properties', () => {
    render(
      <Button type="submit" data-testid="button-component">
        Submit
      </Button>,
    )

    const buttonElement = screen.getByTestId('button-component')

    expect(buttonElement).not.toBeDisabled()
    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement).toHaveTextContent('Submit')
    expect(buttonElement).toHaveAttribute('type', 'submit')
  })

  it('should be able to render the button component correctly when disabled propertie is true', () => {
    render(
      <Button type="submit" disabled={true} data-testid="button-component">
        Submit
      </Button>,
    )

    const buttonElement = screen.getByTestId('button-component')

    expect(buttonElement).toBeDisabled()
    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement).toHaveTextContent('Submit')
    expect(buttonElement).toHaveAttribute('type', 'submit')
  })

  it('should be able to render the button component correctly when loading propertie is true', () => {
    render(
      <Button
        type="submit"
        disabled={true}
        loading={true}
        data-testid="button-component"
      >
        Submit
      </Button>,
    )

    const buttonElement = screen.getByTestId('button-component')

    expect(buttonElement).toBeDisabled()
    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement).toHaveTextContent('Please wait')
    expect(buttonElement).toHaveAttribute('type', 'submit')
  })

  it('should be able to execute the onClick function when the button is clicked', () => {
    const onClickFunction = vi.fn()

    render(
      <Button
        type="submit"
        onClick={onClickFunction}
        data-testid="button-component"
      >
        Submit
      </Button>,
    )

    const buttonElement = screen.getByTestId('button-component')

    fireEvent.click(buttonElement)

    expect(onClickFunction).toHaveBeenCalled()
    expect(onClickFunction).toHaveBeenCalledTimes(1)
  })
})
