import MainLayout, { IMainLayoutProps } from '@/layouts/main-layout';

export default function getMainLayout(page: any, config?: IMainLayoutProps) {
  return <MainLayout {...config}>{page}</MainLayout>;
}
