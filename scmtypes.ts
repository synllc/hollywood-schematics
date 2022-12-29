/**
 * TypeScript definitions for settings-related data.
 *
 * /!\ FOR REFERENCE PURPOSES ONLY! /!\
 * DO NOT IMPORT THIS URI DIRECTLY INTO YOUR PROJECT AS THESE
 * DEFINITIONS MAY CHANGE AT ANY TIME!
 */

export const enum SchemaType {
  Numeric,
  String,
  Boolean,
  Options,
  Toggles,
  Key,
  Path,
  Color,
  Action,
  List,
}

export const enum SchemaFulfillment {
  /**
   * The schema provides all the info/logic necessary for applying the setting's effects.
   */
  Automatic,

  /**
   * The effects of the schema are limited to the engine and won't have any UI effects.
   */
  Remote,

  /**
   * An external piece of logic handles the setting's effects.
   */
  Manual,
}

export const enum SchemaScope {
  /**
   * Settings limited to the interface.
   */
  Interface,

  /**
   * Settings replicated to the engine, but not internally cached.
   */
  Engine,

  /**
   * Settings replicated to the engine and are internally cached.
   */
  Scriptable,
}

export const enum SettingListType {
  Strings,
  Files,
  Paths,
}

export interface SettingHotkey {
  readonly codes: number[]
  readonly key: string
}

export interface SettingToggles {
  title: string
  icon: string
  /**
   * @deprecated
   */
  action?: () => void
}

export interface Schema {
  /**
   * Internal id used. i18n will load
   * `settings-{id}` and `settings-{id}-desc`.
   */
  readonly id: string

  /**
   * Type of the schema.
   */
  readonly type: SchemaType

  /**
   * Scope of the schema. Impacts how the setting
   * is saved/loaded by Hollywood.
   */
  readonly scope: SchemaScope

  /**
   * How the setting is fulfilled. This will default to
   * `Interface` if not available/an invalid value is passed.
   */
  readonly fulfillment: SchemaFulfillment

  /**
   * Default value.
   */
  readonly default?: number | string | boolean | string[] | SettingHotkey

  /**
   * Caption next to the input field. Relevant only to certain types (like
   * dropdowns, textboxes, buttons, etc.)
   */
  readonly caption?: string

  /**
   * Category ID under which the setting will be listed. Setting will be
   * moved to "Application" category if this is undefined.
   */
  readonly category?: string

  /**
   * Whether this setting is experimental and should be hidden from the
   * user's view by default until he enables Experimental mode.
   */
  readonly experimental?: boolean

  /**
   * Prevent the setting from being viewed by the user. Deprecated in favor of
   * independent configuration files.
   * @deprecated
   */
  readonly disableListing?: boolean

  /**
   * Relevant to `Numeric` settings only — configuration of the range input
   * field.
   */
  readonly slider?: {
    minimum: number
    maximum: number
    step?: number
  }

  /**
   * Relevant to `Options` settings only — settings accessible in the dropdown.
   */
  readonly options?: {
    values: string[]
  }

  /**
   * Relevant to `Path` and `List` settings only — path filters.
   */
  readonly path?: {
    directory?: boolean
    /**
     * @type {import("electron").FileFilter}
     */
    filters?: unknown
  }

  /**
   * Relevant to `Key` settings only — maximum # of keys allowed
   * in the combination. Defaults to 4.
   */
  readonly maxKeys?: number

  /**
   * Relevant to `Toggles` settings only — button information.
   */
  readonly toggles?: SettingToggles[]

  /**
   * Relevant to `List` settings only — context information.
   */
  readonly listType?: SettingListType
}

export interface SchemaStrings {
  readonly name: string
  readonly description: string
}
