export type IBaseTemplateProps = {
  test?: string;
};

const BaseTemplate: React.FC<IBaseTemplateProps> = ({ test }) => {
  return <div className="text-red-500">{test}</div>;
};

export { BaseTemplate };
