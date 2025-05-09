export default function Message() {
  return (
    <div className={'w-full flex flex-col gap-4 overflow-auto'}>
      <div className={'bg-blue-400 w-fit text-white rounded-lg px-4 py-2 self-end'}>My Message</div>
      <div className={'bg-gray-400 w-fit rounded-lg px-4 py-2'}>Your Message</div>
    </div>
  );
}
