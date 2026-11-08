import { getMatchingWithFirstRegularExpressionCapturingGroup } from "@yamato-daiwa/es-extensions";

export namespace SplittingOfDataURI_IntoPrefixAndData {

  export type Output = {
    prefix: string;
    data: string;
    MIME_Type: string;
  };

}


export function splitDataURI_IntoPrefixAndData(targetURI: string): SplittingOfDataURI_IntoPrefixAndData.Output;

export function splitDataURI_IntoPrefixAndData(
  targetURI: string,
  options: Readonly<{ mustThrowErrorIfDataURI_IsInvalid: true; }>
):
    SplittingOfDataURI_IntoPrefixAndData.Output | null;


export function splitDataURI_IntoPrefixAndData(
  targetURI: string,
  options?: Readonly<{ mustThrowErrorIfDataURI_IsInvalid?: true; }>
): SplittingOfDataURI_IntoPrefixAndData.Output | null {

  const targetURI_SegmentsAroundComma: ReadonlyArray<string> = targetURI.split(",");

  if (targetURI_SegmentsAroundComma.length !== 2 || !targetURI_SegmentsAroundComma[0].startsWith("data:")) {

    if (options?.mustThrowErrorIfDataURI_IsInvalid === true) {
      throw new Error("Invalid data URI");
    }


    return null;

  }


  const prefix: string = targetURI_SegmentsAroundComma[0];

  /* [ Regex Fiddle ] https://regex101.com/r/hwjC9A/1 */
  return {
    prefix: targetURI_SegmentsAroundComma[0],
    data: targetURI_SegmentsAroundComma[1],
    MIME_Type: getMatchingWithFirstRegularExpressionCapturingGroup(
      prefix,
      /:(?<MimeType>\w+\/\w+);/u,
      { mustExpectExactlyOneMatching: true }
    )
  };

}
