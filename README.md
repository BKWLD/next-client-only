# Next Client Only

Render components on client-side only. Usage:

```ts
import { ClientOnly } from '@bkwld/next-client-only'

export default MyComponent = () => {
	return (
    	<ClientOnly>
        	<div>This will not be a part of the server side renderd template</div>
        </ClientOnly>
    )
}
```