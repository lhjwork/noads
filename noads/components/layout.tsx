type AppLayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: AppLayoutProps) {
  return (
    <>
      <h1>사이드 프로젝트 의견 반영 : 강보림, 김국현, 윤검지</h1>
      <div>{children}</div>
    </>
  );
}
