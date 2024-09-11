/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as fs from "fs";

/**
 * @example
 *     {
 *         name: "name",
 *         default_title_voice_id: "default_title_voice_id",
 *         default_paragraph_voice_id: "default_paragraph_voice_id",
 *         default_model_id: "default_model_id"
 *     }
 */
export interface BodyAddProjectV1ProjectsAddPost {
    /** The name of the project, used for identification only. */
    name: string;
    /** The voice_id that corresponds to the default voice used for new titles. */
    default_title_voice_id: string;
    /** The voice_id that corresponds to the default voice used for new paragraphs. */
    default_paragraph_voice_id: string;
    /** The model_id of the model to be used for this project, you can query GET https://api.elevenlabs.io/v1/models to list all available models. */
    default_model_id: string;
    /** An optional URL from which we will extract content to initialize the project. If this is set, 'from_url' must be null. If neither 'from_url' or 'from_document' are provided we will initialize the project as blank. */
    from_url?: string;
    from_document?: File | fs.ReadStream | Blob | undefined;
    /**
     * Output quality of the generated audio. Must be one of:
     * standard - standard output format, 128kbps with 44.1kHz sample rate.
     * high - high quality output format, 192kbps with 44.1kHz sample rate and major improvements on our side. Using this setting increases the character cost by 20%.
     * ultra - ultra quality output format, 192kbps with 44.1kHz sample rate and highest improvements on our side. Using this setting increases the character cost by 50%.
     * ultra lossless - ultra quality output format, 705.6kbps with 44.1kHz sample rate and highest improvements on our side in a fully lossless format. Using this setting increases the character cost by 100%.
     *
     */
    quality_preset?: string;
    /** An optional name of the author of the project, this will be added as metadata to the mp3 file on project / chapter download. */
    title?: string;
    /** An optional name of the author of the project, this will be added as metadata to the mp3 file on project / chapter download. */
    author?: string;
    /** An optional ISBN number of the project you want to create, this will be added as metadata to the mp3 file on project / chapter download. */
    isbn_number?: string;
    /** [Deprecated] When the project is downloaded, should the returned audio have postprocessing in order to make it compliant with audiobook normalized volume requirements */
    acx_volume_normalization?: boolean;
    /** When the project is downloaded, should the returned audio have postprocessing in order to make it compliant with audiobook normalized volume requirements */
    volume_normalization?: boolean;
    /** A list of pronunciation dictionary locators (pronunciation_dictionary_id, version_id) encoded as a list of JSON strings for pronunciation dictionaries to be applied to the text.  A list of json encoded strings is required as adding projects may occur through formData as opposed to jsonBody. To specify multiple dictionaries use multiple --form lines in your curl, such as --form 'pronunciation_dictionary_locators="{\"pronunciation_dictionary_id\":\"Vmd4Zor6fplcA7WrINey\",\"version_id\":\"hRPaxjlTdR7wFMhV4w0b\"}"' --form 'pronunciation_dictionary_locators="{\"pronunciation_dictionary_id\":\"JzWtcGQMJ6bnlWwyMo7e\",\"version_id\":\"lbmwxiLu4q6txYxgdZqn\"}"'. Note that multiple dictionaries are not currently supported by our UI which will only show the first. */
    pronunciation_dictionary_locators?: string[];
}
