export type Props = {
  name: IconName;
  className?: string;
  "aria-hidden"?: boolean;
};

export type IconName = "arrow-right";

export type IconMapType = Record<
  IconName,
  React.FC<React.SVGProps<SVGSVGElement>>
>;
