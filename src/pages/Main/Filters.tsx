import { useMemo } from "react";
import { Flex } from "@chakra-ui/react";
import { Select, TextInput } from "../../components/Filters";
import { useFilterContext } from "../../context/context";

const Filters = () => {
  const context = useFilterContext();

  // This is a memoized value that will only change when the context changes
  const ActiveValue = useMemo(() => {
    if (!context) return "";
    if (context.filters.active === undefined) return "";
    return context.filters.active ? "1" : "0";
  }, [context]);

  if (!context) return null;

  return (
    <Flex gap="1em" py="3em">
      <TextInput
        label="ID | CUIT | Nombre"
        value={context.filters.stringLike}
        onChange={(e) =>
          context.dispatch({
            type: "update-filter",
            payload: { stringLike: e.target.value },
          })
        }
      />
      <Select
        label="Estado"
        options={[
          { label: "Activo", value: 1 },
          { label: "Inactivo", value: 0 },
        ]}
        value={ActiveValue}
        onChange={(e) => {
          // This is a hack to make the select work with the boolean value
          const payload: {
            active?: boolean;
          } = { active: undefined };
          if (e.target.value === "1" || e.target.value === "0") {
            payload.active = Boolean(parseInt(e.target.value, 10));
          }
          context.dispatch({
            type: "update-filter",
            payload,
          });
        }}
      />
    </Flex>
  );
};

export default Filters;
