import Button from '../components/Buttons/page'
import Loader from '../components/Loader/loader'

const ButtonElements = (): JSX.Element => {
  return (
    <>
      <div className="py-8 space-y-8">
        <div>
          <h3 className="m-0">Button Large</h3>
          <div className="py-4 flex gap-6">
            <Button size="lg">Default</Button>
            <Button size="lg" variant="outline">
              Outline
            </Button>
            <Button size="lg" disabled>
              Disabled
            </Button>
            <Button size="lg" variant="text">
              Text
            </Button>
            <Button size="lg" variant="link" nextLink href="https://www.google.com" targetBlank>
              Href Link
            </Button>
          </div>
        </div>

        <div>
          <h3 className="m-0">Button Medium</h3>
          <div className="py-4 flex gap-6">
            <Button>Default</Button>
            <Button variant="outline">Outline</Button>
            <Button disabled>Disabled</Button>
            <Button variant="text">Text</Button>
            <Button variant="link" nextLink href="#!">
              Href Link
            </Button>
          </div>
        </div>

        <div>
          <h3 className="m-0">Button Small</h3>
          <div className="py-4 flex gap-6">
            <Button size="sm">Default</Button>
            <Button size="sm" variant="outline">
              Outline
            </Button>
            <Button size="sm" disabled>
              Disabled
            </Button>
            <Button size="sm" variant="text">
              Text
            </Button>
            <Button variant="link" nextLink href="#!">
              Href Link
            </Button>
          </div>
        </div>
      </div>

      <div className="py-8 space-y-8">
        <div>
          <h3 className="m-0">Button Colors</h3>
          <div className="py-4 flex gap-6">
            <Button>Default</Button>
            <Button color="bg-info">Info</Button>
            <Button color="bg-danger">Danger</Button>
            <Button color="bg-success">Success</Button>
            <Button color="bg-warning">Warning</Button>
          </div>
        </div>

        <div>
          <h3 className="m-0">Button Icons</h3>
          <div className="py-4 flex gap-6">
            <Button icon={<i className="ri-cloud-line ml-2"></i>}>Clouds</Button>
            <Button variant="outline">
              <Loader className="mr-2" />
              Outline
            </Button>
            <Button disabled>Disabled</Button>
            <Button variant="text" icon={<i className="ri-arrow-right-line ml-2"></i>}>
              Text
            </Button>
            <Button variant="link" nextLink href="#!" icon={<i className="ri-external-link-line pl-2"></i>}>
              Href Link
            </Button>
          </div>
        </div>

        <div>
          <h3 className="m-0">Button Radius</h3>
          <div className="py-4 flex gap-6">
            <Button borderRadius="rounded-full">Default</Button>
            <Button variant="outline" borderRadius="rounded-full">
              Outline
            </Button>
            <Button disabled borderRadius="rounded-full">
              Disabled
            </Button>
            <Button variant="text" borderRadius="rounded-full">
              Text
            </Button>
            <Button variant="link" nextLink href="#!">
              Href Link
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
export default ButtonElements
