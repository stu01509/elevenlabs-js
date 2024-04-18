/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as ElevenLabs from "../index";

export interface FineTuningResponse {
    is_allowed_to_fine_tune?: boolean;
    finetuning_state?: ElevenLabs.FinetuningState;
    verification_failures?: string[];
    verification_attempts_count?: number;
    manual_verification_requested?: boolean;
    language?: string;
    finetuning_progress?: Record<string, number>;
    message?: string;
    dataset_duration_seconds?: number;
    verification_attempts?: ElevenLabs.VerificationAttemptResponse[];
    slice_ids?: string[];
    manual_verification?: ElevenLabs.ManualVerificationResponse;
}
