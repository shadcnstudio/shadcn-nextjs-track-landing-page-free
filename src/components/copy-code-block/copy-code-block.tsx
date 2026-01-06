import CopyCodeBlock from '@/components/copy-code'

const codeExample = `// Example of updated API usage
const agent = new AIAgent({
  model: "Shadcn/studio",
  reasoning: "enhanced",
  multiModal: true,
});`

export default function App() {
  return (
    <div>
      <CopyCodeBlock code={codeExample} />
    </div>
  )
}
