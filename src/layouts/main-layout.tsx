import Head from 'next/head';

export interface IMainLayoutProps {
  children: React.ReactNode;
  // Add props here if needed
  // FIXME - Add prop "title"
}

export default function MainLayout({ children }: IMainLayoutProps) {
  return (
    <>
      <Head>
        <title>Project Chills</title>
        <meta name="description" content="Project Chills" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </>
  );
}
